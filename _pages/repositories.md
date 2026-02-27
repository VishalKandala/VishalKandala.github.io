---
layout: none
permalink: /repositories/
title: Repositories
description: Legacy route redirected to Projects.
nav: false
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="refresh" content="0; url={{ '/projects/' | relative_url }}" />
  <title>Redirecting to Projects</title>
  <script>
    window.location.replace("{{ '/projects/' | relative_url }}");
  </script>
</head>
<body>
  <p>Redirecting to <a href="{{ '/projects/' | relative_url }}">Projects</a>...</p>
</body>
</html>
