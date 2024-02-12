FROM httpd:2.4.58-alpine

# RUN mkdir -p /usr/src/todolist
# WORKDIR /usr/src/todolist

# COPY . /usr/src/todolist

# RUN apk add npm
# RUN npm install
# RUN PUBLIC_URL=/ npm run build

# RUN cp -R build/. /usr/local/apache2/htdocs

COPY build /usr/local/apache2/htdocs
