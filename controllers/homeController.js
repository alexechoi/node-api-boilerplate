const homeService = require('../services/homeService');

const homeController = {
    getHome: async (req, res) => {
        try {
            const message = await homeService.getWelcomeMessage();
            res.status(200).json({ message });
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};

module.exports = homeController;