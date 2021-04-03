import { Router } from "express";
import UserController from "../controller/UserController";
import { authGuard, roleGuard } from "@hakanhueriyet/any-util-middlewares";
import UserTypeController from "../controller/UserTypeController";
import { UserAddressesController } from "../controller/UserAddressesController";

const router = Router();

router.get(
  "/list",
  authGuard,
  roleGuard("customer"),
  UserController.getUsersList
);
router.get("/detail/:id", authGuard, UserController.getUserById);
router.get("/status/:id", authGuard, UserController.changeUserStatus);

router.patch("/role/:id", authGuard, UserController.changeUserRole);
router.patch("/update/:id", authGuard, UserController.updateUser);

// User Type Document
router.get(
  "/type/list",
  authGuard,
  roleGuard("customer"),
  UserTypeController.getUserTypes
);
router.get(
  "/type/:id",
  authGuard,
  roleGuard("customer"),
  UserTypeController.getTypeById
);

router.post(
  "/type/new/",
  authGuard,
  roleGuard("customer"),
  UserTypeController.createUserType
);

router.patch(
  "/type/update/:id",
  authGuard,
  roleGuard("customer"),
  UserTypeController.updateUserType
);

router.delete(
  "/type/:id",
  authGuard,
  roleGuard("customer"),
  UserTypeController.deleteUserType
);

// UserAddresses
router.get("/address/:id", authGuard, UserAddressesController.getUserAddress);
router.post(
  "/address/new",
  authGuard,
  UserAddressesController.createUserAddress
);
router.patch(
  "/address/update/:id",
  authGuard,
  UserAddressesController.updateUserAddress
);

router.delete(
  "/address/delete/:id",
  authGuard,
  UserAddressesController.deleteAddress
);

export { router as usersRouter };
