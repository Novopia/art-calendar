# cs132-final-project

#Dependency:

Our suggestion is to remove the node_modules and do "npm install". The tricky part is the
"sharp" module. It requires libvips which is a system library. "npm install sharp" should install
it for you if you have enough permission. Otherwise, you probably need to install it manually.

For more details, you might want to visit http://sharp.dimens.io/en/stable/.

#Run: 

node bin/www

#View:

* application home: localhost:3000/

* admin upload events to pages: localhost: 3000/upload

* admin remove events: localhost: 3000/remove
