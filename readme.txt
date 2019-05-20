backend {
	nodemon app
	mongod
}

frontend {
	npm run start
	npm run build
}