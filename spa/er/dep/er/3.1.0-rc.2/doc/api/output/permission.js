Ext.data.JsonP.permission({"tagname":"class","name":"permission","autodetected":{},"files":[{"filename":"permission.js","href":"permission.html#permission"}],"singleton":true,"members":[{"name":"add","tagname":"method","owner":"permission","id":"method-add","meta":{}},{"name":"isAllow","tagname":"method","owner":"permission","id":"method-isAllow","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-permission","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/permission.html#permission' target='_blank'>permission.js</a></div></pre><div class='doc-contents'><p>权限管理器，提供权限的注册和判断功能</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-add' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='permission'>permission</span><br/><a href='source/permission.html#permission-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/permission-method-add' class='name expandable'>add</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>添加权限\n\n权限以字符串作为名称，添加权限说明时，传递一个对象，\n其中的健为权限名称，值为是否拥有该权限\n\n权限说明可以嵌套，如：\n\n{\n    books: { VIEW_BOOK: true, EDIT_BOOK: false }...</div><div class='long'><p>添加权限</p>\n\n<p>权限以字符串作为名称，添加权限说明时，传递一个对象，\n其中的健为权限名称，值为是否拥有该权限</p>\n\n<p>权限说明可以嵌套，如：</p>\n\n<pre><code>{\n    books: { VIEW_BOOK: true, EDIT_BOOK: false },\n    authors: { VIEW_AUTHOR: true, EDIT_AUTHOR: true }\n}\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>权限说明</p>\n</div></li></ul></div></div></div><div id='method-isAllow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='permission'>permission</span><br/><a href='source/permission.html#permission-method-isAllow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/permission-method-isAllow' class='name expandable'>isAllow</a>( <span class='pre'>name</span> ) : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>判断是否拥有指定权限 ...</div><div class='long'><p>判断是否拥有指定权限</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : string<div class='sub-desc'><p>权限名称</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>是否拥有<code>name</code>表示的权限</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});