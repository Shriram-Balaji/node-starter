const express = require('express');
const router = express.Router();

const mainRoutes = () => {
	router.get('/ping', (req, res, next) => {
		res.status(200).json({ success: true });
	});

	return router;
};

module.exports = mainRoutes;
