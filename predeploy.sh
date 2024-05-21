# predeploy.sh

# remove the version hash from our base javascript file for a stable URL
find build/static/js -name "main.*.js" -exec mv '{}' build/static/js/main.js \;
find build/static/css -name "main.*.css" -exec mv '{}' build/static/css/main.css \;
# find build/static/media -name "logo.*.svg" -exec mv '{}' build/static/media/logo.svg \;