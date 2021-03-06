'use strict';

var _ = require('lodash');

exports = module.exports = {};

exports.renderFilterDropdown = function(filters) {

  var menuTemp = _.template(
	 `<% _.forEach(filters, function(filter) {  %>
      <li><a class="option-item" data-id=<%= filter.id %>>
      		<%= filter.name %>
      </a></li>
    <% });                                          %>`
	);

  return menuTemp(filters);
}

exports.renderTableList = function(infos) {

  var listTemp = _.template(
	 `<% _.forEach(infos, function(info) {  %>
      <li class="table-item">
      	<div class="table-col"><%= info.work_order_id %></div>
        <div class="table-col"><%= info.machine_id %></div>
        <div class="table-col"><%= info.mold_id %></div>
        <div class="table-col"><%= info.customer_id %></div>
        <div class="table-col"><%= info.work_st %></div>
        <div class="table-col"><%= info.work_et %></div>
        <div class="table-col-sm"><%= info.sample_num %></div>
        <div class="table-col-sm"><%= info.error_num %></div>
        <div class="table-col-sm">25%</div>
		  </li>
    <% });                                          %>`
	);

  return listTemp(infos);
}

exports.renderHeatmap = function(info) {

  var imgTemp = _.template(
      '<img src=<%= info.heatmap %>>'
  );

  return imgTemp(info);
}

exports.renderChart = function() {

  var imgTemp = _.template(
      "<img src='../../../images/sample/chart.png'>"
  );

  return imgTemp();
}
