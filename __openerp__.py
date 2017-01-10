##############################################################################
#
#    default_order_hierarchy module for OpenERP
#    Copyright (C) 2012-2013 Anybox (<https://anybox.fr>)
#
#    This file is a part of default_order_hierarchy
#
#    default_order_hierarchy is free software: you can redistribute it and/or modify
#    it under the terms of the GNU Affero General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    default_order_hierarchy is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
##############################################################################

{
    'name': 'default_order_hierarchy',
    'version': '8.0',
    'author': 'Anybox',
    'website': 'https://anybox.fr',
    'category': 'Project Management',
    'sequence': 150,
    'depends': [
        'web',
    ],
    'images': [],
    'description': ''' Allows to sort hierarchical tree view ''',
    'data': [
        'default_order_hierarchy.xml',
    ],
    'test': [],
    'demo': [],
    "js": [],
    "css": [],
    "qweb": [],
    'active': False,
    'installable': True,
    'application': True,
    'web_preload': True,

}
