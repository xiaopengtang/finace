<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
		<meta charset="utf-8">
		<title>{% block title %}{% endblock %}</title>
		{% block style %}{% endblock %}
	</head>
	<body>
	    <div class="wrap">
	    	{% block body %}{% endblock %}
	    </div>
	</body>
	{% block script %}{% endblock %}
</html>