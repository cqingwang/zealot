<% if @pac.content.to_s.empty? %>
function FindProxyForURL(url, host) {
	return "PROXY <%= @pac.host %>:<%= @pac.port %>; DIRECT";
}
<% else %>
<%= @pac.content %>
<% end %>