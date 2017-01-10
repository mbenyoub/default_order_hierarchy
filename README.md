# README #

This module allows you to override the way hierarchical tree view are sorted in Odoo 8. At this moment, it only works for numeric and char values.

### How do I get set up? ###

You just need to install the module and you're ready to start. 

### Example ###


```
#!xml

<!-- hierarchical view for the tickets -->
<record id="tickets_hierarchy" model="ir.ui.view">
    <field name="name">anytracker.ticket.hierarchy</field>
    <field name="model">anytracker.ticket</field>
    <field name="field_parent">subnode_ids</field>
    <field name="type">tree</field>
    <field name="arch" type="xml">
        <tree string="Tickets hierarchy" default_order="char name desc">
            <field name="name"/>
            <field name="nb_children"/>
        </tree>
    </field>
</record>
```


### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact