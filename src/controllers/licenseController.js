let licenseKey = 'prince victorino'; // In-memory store for the license key

exports.getLicenseKey = (req, res) => {
    res.json({ licenseKey });
};
