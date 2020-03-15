export default function auth(req, res, next) {
    const token = req.headers["x-access-token"] || req.headers["authorization"];

    if (!token) return res.status(401).send("Access denied. No token provided.");
    console.log(token);
    next();
}