import urllib.request
webUrl = urllib.urlopen('https://official-joke-api.appspot.com/random_joke"')
print(webUrl.getcode())