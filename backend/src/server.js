import express from "express";
import authRoutes from "./routes/auth.routes.js";
import transferRoutes from "./routes/transfer.routes.js";
import notificationRoutes from "./routes/notification.routes.js";

import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({origin: true, credentials: true}));

app.use("/api/auth", authRoutes);
app.use("/api", transferRoutes);
app.use("/api", notificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
