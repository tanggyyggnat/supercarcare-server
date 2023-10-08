import express from "express"

import signupRoute from "./signupRoute"
import signinRoute from "./signinRoute"

import accountRoute from "./accountRoute"
import employeeRoute from "./employeeRoute"
import customerRoute from "./customerRoute"

import jobRoleRoute from "./jobRoleRoute"

import schedulesRoute from "./scheduleRoute"

import bookingRoute from "./bookingRoute"
import processRoute from "./processRoute"

import serviceTypeRoute from "./serviceTypeRoute"
import subServiceRoute from "./subserviceRoute"

import paymentRoute from "./paymentRoute"

import carRoute from "./carRoute"
import stockRoute from "./stockRoute"
import bookingStockRoute from "./bookingStockRoute"



const router = express.Router();

router.use("/signup", signupRoute)
router.use("/signin", signinRoute)

router.use("/account", accountRoute)
router.use("/employee", employeeRoute)
router.use("/customer", customerRoute)

router.use("/jobRole", jobRoleRoute)

router.use("/schedule", schedulesRoute)

router.use("/booking", bookingRoute)
router.use("/process", processRoute)

router.use("/serviceType", serviceTypeRoute)
router.use("/subService", subServiceRoute)

router.use("/payment", paymentRoute)

router.use("/car", carRoute)
router.use("/stock", stockRoute)
router.use("/bookingStock", bookingStockRoute)

export default router;












// import express from "express"

// import accountRoute from "./accountRoute"
// import loginRoute from "./loginRoute"
// import employeeRoute from "./employeeRoute"
// import jobroleRoute from "./jobroleRoute"
// import customerRoute from "./customerRoute"
// import bookingRoute from "./bookingRoute"
// import scheduleRoute from "./scheduleRoute"
// import progressRoute from "./progressRoute"
// import paymentRoute from "./paymentRoute"
// import carRoute from "./carRoute"
// import stockRoute from "./stockRoute"
// import carhistoryRoute from "./carhistoryRoute"

// const router = express.Router();

// router.use("/booking", BookingRoute)
// // router.use("/login", loginRoute)
// // router.use("/employee", employeeRoute)
// // router.use("/jobrole", jobroleRoute)
// // router.use("/customer", customerRoute)
// // router.use("/booking", bookingRoute)
// // router.use("/schedule", scheduleRoute)
// // router.use("/progress", progressRoute)
// // router.use("/payment", paymentRoute)
// // router.use("/car", carRoute)
// // router.use("/stock", stockRoute)
// // router.use("/carhistory", carhistoryRoute)

// export default router;