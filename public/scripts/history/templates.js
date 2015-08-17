'use strict';

var _ = require('lodash');

exports = module.exports = {};

exports.renderFilterDropdown = function(filters) {

  var menuTemp = _.template(
	 `<% _.forEach(filters, function(filter) {  %>
      <li><a class="option-item" data-id=<%= filter.id %>>
      		<%= filter.id %>
      </a></li>
    <% });                                          %>`
	);

  return menuTemp(filters);
}

exports.renderTableList = function(infos) {

  var menuTemp = _.template(
	 `<% _.forEach(infos, function(info) {  %>
      <li class="table-item">
        <div class="table-col"><%= info.workorder_id %></div>
      	<div class="table-col"><%= info.machine_id %></div>
      	<div class="table-col"><%= info.mold_id %></div>
      	<div class="table-col"><%= info.customer_id %></div>
      	<div class="table-col-sm"><%= info.target_num %></div>
      	<div class="table-col"><%= info.start_date %></div>
      	<div class="table-col-sm"><%= info.current_fail_num %>/<%= info.current_num %></div>
      	<div class="table-col-sm"><%= info.abnormal_num %></div>
      	<div class="table-col-lg">
      		<button class="realtime-showpic-btn" data-type="current" data-info=<%= info.workorder_id %>/<%= info.machine_id %>/<%= info.mold_id %>>即時</button>
        	<button class="realtime-showpic-btn" data-type="safety" data-info=<%= info.workorder_id %>/<%= info.machine_id %>/<%= info.mold_id %>>安全</button>
        	<button class="realtime-showpic-btn" data-type="error" data-info=<%= info.workorder_id %>/<%= info.machine_id %>/<%= info.mold_id %>>異常</button>
      	</div>
		  </li>
    <% });                                          %>`
	);

  return menuTemp(infos);
}