<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<meta charset="utf-8">
		<title>赛尔理财</title>
		<link rel="stylesheet" type="text/css" href="/public/style.css?v={{cdn.cssVersion}}">
		{% block style %}{% endblock %}
	</head>
	<body>
	    <div class="wrap">
	    	{{html | safe}}
	    </div>
	</body>
	<script>
		// var user
		window.USER = {{user | dump | safe }}
		window.G = {'isApp': false}
		window.CDN = {{cdn | dump | safe }}
	</script>
	<script type="text/javascript" src="/public/common.bundle.js?v={{cdn.jsVersion}}"></script>
	<script type="text/javascript" src="/public/main.bundle.js?v={{cdn.jsVersion}}"></script>
	{% block script %}{% endblock %}
</html>