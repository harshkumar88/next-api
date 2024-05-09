import { User } from "./model"; // Assuming your models are in a 'models' directory

export default async function handler(req, res) {
  if (req.method === "GET") {
    return getUser(req, res);
  } else if (req.method === "POST") {
    return createUsers(req, res);
  } else if (req.method === "PATCH") {
    return updateUsers(req, res);
  } else if (req.method === "DELETE") {
    deleteUser(req, res);
  } else {
    return res.status(405).send("Method not allowed");
  }
}

const getUser = async (req, res) => {
  try {
    const { users } = req?.query;
    const id = users?.[1];
    if (id && id != undefined) {
      const user = await User.findById(id);
      if (!user) {
        res.status(200).json({ error: "No user Found" });
      } else {
        res.status(200).json(user);
      }
    } else {
      const users = await User.find();
      res.status(200).json(users);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

const createUsers = async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

const updateUsers = async (req, res) => {
  try {
    const { users } = req?.query;
    const id = users?.[1];
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    updatedUser.save();
    res.status(200).send("User Updated successfully");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};

const deleteUser = async (req, res) => {
  try {
    const { users } = req?.query;
    const id = users?.[1];
    let msg = "";
    if (id && id != undefined) {
      const user = await User.findByIdAndDelete(id);
      if (user && user != undefined) {
        msg = "User deleted successfully";
      } else {
        msg = "No User Found";
      }
    } else {
      await User.deleteMany({});
      msg = "Users deleted successfully";
    }
    res.status(200).send(msg);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
};
