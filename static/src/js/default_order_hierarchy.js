openerp.default_order_hierarchy = function(instance) {

    var QWeb = instance.web.qweb;

    instance.web.TreeView.include({

        sort_records: function(records, crit, type, tri) {
            records.sort(function(a, b) {
                if(type.toLowerCase() == 'char'){
                    var x = a[crit].toLowerCase(), y = b[crit].toLowerCase();
                    if(tri.toLowerCase() == 'desc'){
                        return x < y ? -1 : x > y ? 1 : 0;
                    }
                    if(tri.toLowerCase() == 'asc'){
                        return x > y ? -1 : x < y ? 1 : 0;
                    }
                }
                if(type.toLowerCase() == 'int'){
                    if(tri.toLowerCase() == 'desc'){
                        return a[crit] - b[crit];
                    }
                    if(tri.toLowerCase() == 'asc'){
                        return b[crit] - a[crit]
                    }
                }
            });
            return records;
        },

	// get child data of selected value
    	getdata: function (id, children_ids) {
            var self = this;
            var default_order_args = this.fields_view.arch.attrs.default_order.split(" ")
            var type = default_order_args[0] || false;
            var crit = default_order_args[1] || false;
            var tri = default_order_args[2]  || 'ASC';
            self.dataset.read_ids(children_ids, this.fields_list()).done(function(records) {
                if(default_order_args && type && crit){
                    records = self.sort_records(records, crit, type, tri);
                }
                _(records).each(function (record) {
                    self.records[record.id] = record;
                });
                var $curr_node = self.$el.find('#treerow_' + id);
                var children_rows = QWeb.render('TreeView.rows', {
                    'records': records,
                    'children_field': self.children_field,
                    'fields_view': self.fields_view.arch.children,
                    'fields': self.fields,
                    'level': $curr_node.data('level') || 0,
                    'render': instance.web.format_value,
                    'color_for': self.color_for,
                    'row_parent_id': id
                });
                if ($curr_node.length) {
                    $curr_node.addClass('oe_open');
                    $curr_node.after(children_rows);
                } else {
                    self.$el.find('tbody').html(children_rows);
                }
            });
        },
    });
}
