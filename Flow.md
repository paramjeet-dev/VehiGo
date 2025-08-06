# **Development Flow**

## **1. User Authentication & Profile Flow**

Scenario: User registers, logs in, manages profile and addresses.

1. User registers with OTP (email/phone) and sets a password.
2. User logs in using credentials, receives JWT for authentication.
3. User can reset the password using OTP verification.
4. User navigates to profile to view and update details.

---

## **2. Main Flow**
 1. User chooses the desired service:
    1.1. Vehicle Repair: Enter basic vehicle details and choose payment method.
    1.2. Vehicle Towing: User can choose for vehicle tow service. Method same as repair service.
 2. Send a request to backend for creating service request.
 3. The backend handles the request and sends necessary response.
 4. Frontend shows the service as created and shows it in active requests div.
 5. User gets a notification on successful request creation.
 6. Generates an otp after request is accepted by any service partner.

---

## **3. Review and Rating Flow**
 1. User navigates to any of the completed service.
 2. User clicks "Add Review" to add a review (if already submitted, shows the rating and review).
 3. Send the review post request to backend.
 4. Review saved in mongo and user notified.
 5. Average rating of service partner is updated.

---

## **4. Requests History Flow**
 1. User clicks on "History" button.
 2. Sends a get request to the backend.
 3. User can filter requests based on status(completed, pending etc.)
 4. Clicking on any request opens up a modal that shows request details, service partner name and review given by user(if any).

---

## **5. Service Partner(SP) Flow**
 1. Frontend fetches all currently active requests and displays them.
 2. SP clicks on any request to see the details.
 3. After accepting any request, auto generate an otp and sends a notification to user.
 4. Update the request status in backend.
 5. In order to mark the request as completed, enter otp sent to user.
 6. Sends a completion notification to the user.    

## **6. Notification Flow**