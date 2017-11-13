<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<meta charset="utf-8">
		<title>赛尔理财</title>
		<link rel="stylesheet" type="text/css" href="/public/style.css">
		{% block style %}{% endblock %}
	</head>
	<body>
	    <div class="wrap">
	    	{% block body %}{% endblock %}
	    </div>
	</body>
	<script>
		// var user
		window.USER = {{user | dump | safe }}
		window.G = {'isApp': false}
	</script>
	<script type="text/javascript" src="/public/common.bundle.js"></script>
	<script type="text/javascript" src="/public/main.bundle.js"></script>
	{% block script %}{% endblock %}
</html>