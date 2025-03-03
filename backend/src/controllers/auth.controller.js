import { registerUser, loginUser, logoutUser } from "../services/auth.service.js";

export const register = async (req, res) => {
    try {
      const user = await registerUser(req.body.email, req.body.password, req.body.fullName, req.body.phone);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
};
  
export const login = async (req, res) => {
    try {
        const user = await loginUser(req.body.email, req.body.password);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const logout = async (req, res) => {
    try {
        const response = await logoutUser();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
