# Seema Health Hub

PROJECT NAME:
Seema Healthcare – Online Pharmacy, Prescription Ordering, Hospital Referral Rewards and Customer Portal

PROJECT OBJECTIVE:
Build a complete, professional, multipage, responsive healthcare e-commerce portal for Seema Healthcare.

The platform will initially support approximately 800–850 registered users, with an architecture that can later scale to several thousand users.

Each customer must be able to:

1. Register for an individual account.
2. Log in to a private dashboard.
3. Search and purchase healthcare products.
4. Upload a doctor’s prescription.
5. Receive an order quotation/order value after prescription review.
6. Approve the generated order.
7. Make payment or select Cash on Delivery.
8. Track delivery status and estimated delivery timeline.
9. Earn points or discounts when referred by an associated hospital or doctor.
10. Review previous orders, prescriptions, rewards and invoices.

Create one secure Main Admin dashboard from which the administrator can manage users, products, prescriptions, orders, hospitals, doctors, referral points, offers, discounts, banners, payments, deliveries and website content.

This is currently a functional demonstration for a client, so add professional dummy data and make every major user flow clickable and understandable. Do not leave empty pages or non-functional buttons.

TECHNOLOGY STACK:
- Frontend: React.js with Vite
- Backend: Node.js and Express.js
- Programming language: JavaScript only
- Database: MySQL
- Authentication: JWT access token with secure refresh-token flow
- Password security: bcrypt hashing
- Styling: Tailwind CSS or well-structured modular CSS
- State management: Context API or Redux Toolkit
- API communication: Axios
- Form validation: React Hook Form and Yup or Zod
- Image/file uploads: Multer
- Charts: Recharts
- Icons: Lucide React
- Deployment-ready for:
  - Frontend: Vercel or Hostinger
  - Backend: Hostinger Node.js, Render or Railway
  - Database: Hostinger MySQL or managed MySQL

Do not use TypeScript.
Do not use PHP.
Do not use WordPress.
Do not use Firebase as the primary database.

BRAND IDENTITY:
Business name: Seema Healthcare

Suggested tagline:
“Trusted Healthcare Delivered to Your Doorstep”

Alternative tagline:
“Medicines, Wellness and Care—All in One Place”

VISUAL DESIGN DIRECTION:
Use the uploaded TrueMeds screenshot only as a structural and UI/UX reference.

Create an original, premium healthcare design using:

Primary colour:
- Medical Blue: #176BCE

Secondary colour:
- Aqua Teal: #16B8A6

Accent colour:
- Offer Orange: #FF8A34

Success colour:
- Green: #16A36A

Background:
- Soft Ice Blue: #F4FAFF
- White: #FFFFFF

Text:
- Dark Navy: #12263A
- Secondary Grey: #657485

Design style:
- Clean and trustworthy
- Soft rounded cards
- Light shadows
- Spacious layouts
- Large product images
- Clear pricing and discount labels
- Professional healthcare illustrations
- Minimal gradients
- Strong mobile usability
- Accessible font sizes and colour contrast

Use royalty-free or appropriately licensed healthcare images from sources such as Unsplash, Pexels or Freepik with attribution where required. For demo products, use original placeholder medicine-pack illustrations or generic mock product images.

Do not directly hotlink or copy random Pinterest or Google images into the production website.

RESPONSIVE REQUIREMENTS:
The entire system must work properly on:
- Desktop
- Laptop
- Tablet
- Mobile

Create:
- Responsive navigation
- Mobile bottom navigation
- Collapsible admin sidebar
- Touch-friendly buttons
- Responsive product cards
- Responsive tables converted into cards on small screens
- Mobile-friendly checkout
- Responsive modal windows
- Responsive prescription uploader

==================================================
USER ROLES
==================================================

ROLE 1: CUSTOMER / REGISTERED USER

Approximately 800–850 customers will have individual accounts.

Customer registration fields:
- Full name
- Username
- Mobile number
- Password
- Confirm password
- Email address, optional
- Date of birth, optional
- Gender, optional
- Complete delivery address
- City
- State
- PIN code
- Referred by hospital: Yes/No
- Hospital selection
- Doctor name, optional
- Hospital referral code, optional
- Accept Terms and Conditions
- Accept Privacy Policy

Required registration fields must include:
- Username
- Phone number
- Password

Registration workflow:
1. Customer opens the Register page.
2. Customer enters all required information.
3. Validate unique username and mobile number.
4. Verify mobile number using a demo OTP.
5. Create account.
6. Assign a unique customer ID.
7. Redirect customer to the dashboard.
8. Send a welcome notification.

For the demo:
- Use OTP: 123456
- Show clear success and error messages.

Customer login options:
- Username and password
- Phone number and password
- Forgot password
- Reset password using OTP
- Remember me
- Show/hide password
- Secure logout

Customer account statuses:
- Active
- Inactive
- Suspended
- Blocked

ROLE 2: MAIN ADMIN

Create one Main Admin with complete control over the platform.

Main Admin demo credentials:
Email: admin@seemahealthcare.demo
Password: Admin@123

Do not expose these credentials in production.

The Main Admin can:
- View all registered users
- View active and recently logged-in users
- View login history
- Activate, deactivate or block customers
- Reset customer passwords
- View complete customer profiles
- Add, edit and delete products
- Manage product stock and expiry batches
- Review uploaded prescriptions
- Approve, reject or request a clearer prescription
- Generate order values from prescriptions
- Add prescribed products to a customer quotation
- Manage orders and deliveries
- Manage hospitals and doctors
- Configure referral rewards
- Add or remove reward points
- Create coupon codes
- Add offers and discounts
- Manage homepage banners
- Manage categories and brands
- Manage payments, refunds and invoices
- Update delivery dates and tracking status
- Publish health articles
- Manage FAQs and legal pages
- View reports and analytics
- Export users, products and orders
- Maintain admin activity logs

OPTIONAL FUTURE ROLES:
Keep the database architecture ready for future roles, but do not expose them unless enabled:
- Pharmacist
- Order Manager
- Delivery Manager
- Content Manager

==================================================
PUBLIC WEBSITE PAGES
==================================================

1. HOME PAGE

Create a modern healthcare e-commerce homepage containing:

Top information strip:
- Genuine healthcare products
- Secure payments
- Prescription verification
- Doorstep delivery
- Customer support number

Header:
- Seema Healthcare logo
- Delivery location or PIN code selector
- Large medicine/product search bar
- Upload Prescription button
- Offers
- Referral Rewards
- Login/Register
- Cart icon with item count

Mobile header:
- Logo
- Search
- Upload Prescription
- Account
- Cart

Hero section:
Use an original healthcare banner with:
- “Order Medicines and Healthcare Products Online”
- “Upload Your Prescription and Get Your Order Value”
- “Hospital-Referred Customers Earn Extra Benefits”
- Primary CTA: Upload Prescription
- Secondary CTA: Shop Products
- Tertiary CTA: Check Referral Benefits

Add 3–4 rotating banners:
- Monthly medicine savings
- Hospital referral rewards
- Personal care offers
- Free or discounted delivery offer

Quick services:
- Upload Prescription
- Reorder Medicines
- Track Order
- Hospital Rewards
- Speak to Support

Shop by category:
- Prescription Medicines
- OTC Products
- Personal Care
- Vitamins and Supplements
- Diabetes Care
- Healthcare Devices
- Mother and Baby Care
- Skin Care
- Hair Care
- Oral Care
- Elderly Care
- First Aid
- Ayurvedic Products
- Homeopathic Products

Display:
- Popular products
- Deal of the day
- Best-selling products
- Newly added products
- Products by health concern
- Recommended products
- Frequently reordered products
- Hospital referral exclusive offers

How prescription ordering works:
1. Upload prescription.
2. Admin/pharmacist reviews it.
3. Order value is generated.
4. Customer approves and pays.
5. Order is packed and delivered.

Hospital referral section:
- Select associated hospital
- Enter referral code
- Earn points or discount
- View terms
- CTA: Check Eligibility

Trust section:
- Secure prescription handling
- Verified products
- Transparent pricing
- Order tracking
- Customer support

Health articles:
Show 3–6 dummy health articles.

Testimonials:
Add professional dummy testimonials.

FAQs:
Add accordion-based frequently asked questions.

Newsletter:
- Name
- Email
- Subscribe button

Footer:
- About Seema Healthcare
- Shop categories
- Customer support
- Contact information
- Upload prescription
- Track order
- Referral rewards
- Privacy policy
- Terms and conditions
- Shipping policy
- Return and refund policy
- Prescription policy
- Medical disclaimer
- Social media icons
- Copyright

2. PRODUCTS LISTING PAGE

Include:
- Breadcrumb
- Search bar
- Category tabs
- Product grid/list toggle
- Sorting
- Filters
- Pagination or load more

Filters:
- Category
- Brand
- Price range
- Discount range
- Prescription required
- Availability
- Rating
- Health concern
- Product type
- Manufacturer

Sort options:
- Popularity
- Price low to high
- Price high to low
- Highest discount
- Newest
- Customer rating

Product card:
- Product image
- Product name
- Generic or composition name
- Pack size
- Manufacturer
- MRP
- Selling price
- Discount percentage
- Prescription-required badge
- Stock status
- Rating
- Add to Cart
- View Details
- Add to Wishlist

3. PRODUCT DETAILS PAGE

Display:
- Multiple product images
- Product name
- Brand
- Manufacturer
- Composition
- Pack size
- MRP
- Selling price
- Discount
- Tax information
- Availability
- Estimated delivery
- PIN code checker
- Quantity selector
- Add to Cart
- Buy Now
- Wishlist
- Prescription required notice

Product information tabs:
- Product description
- Uses
- Directions
- Safety information
- Storage instructions
- Manufacturer information
- Frequently asked questions
- Return eligibility
- Disclaimer

Add:
- Similar products
- Frequently bought together
- Customers also viewed
- Related categories

Do not automatically recommend prescription substitutes without an authorised review workflow.

4. UPLOAD PRESCRIPTION PAGE

Create a highly visible prescription-upload page.

Allow:
- JPG
- JPEG
- PNG
- PDF
- Multiple prescription files

Upload methods:
- Drag and drop
- Browse files
- Mobile camera capture

Form fields:
- Patient name
- Patient age
- Mobile number
- Doctor name
- Hospital/clinic name
- Prescription date
- Additional instructions
- Preferred delivery address
- Preferred delivery date
- Referral hospital
- Referral code
- Consent checkbox

Show upload guidelines:
- Prescription must be readable.
- Doctor’s name and registration details should be visible.
- Medicine names and dosage should be visible.
- Do not upload unrelated documents.
- Prescription medicines require review before order confirmation.

Prescription statuses:
- Uploaded
- Under Review
- Clearer Copy Required
- Approved
- Partially Approved
- Rejected
- Quotation Generated
- Customer Approved
- Converted to Order
- Expired

After upload:
- Generate prescription request number.
- Show success message.
- Display request in customer dashboard.
- Notify admin.
- Show estimated review time.
- Allow customer to upload a replacement file.

5. HOSPITAL REFERRAL AND REWARDS PAGE

Create a dedicated referral programme.

Associated hospital fields:
- Hospital name
- Hospital code
- Hospital logo
- Address
- Contact number
- Referral discount percentage
- Points multiplier
- Programme validity
- Minimum order value
- Maximum discount
- Eligible categories
- Active/inactive status

Customer referral flow:
1. Customer selects a hospital during registration or checkout.
2. Customer enters hospital referral code.
3. System validates the code.
4. Admin may verify the referral manually.
5. Eligible points or discounts are applied.
6. Reward is visible in the dashboard.
7. Every transaction is recorded in the reward ledger.

Reward options:
- Fixed signup points
- Percentage-based order points
- Flat referral discount
- First-order hospital discount
- Birthday points
- Festival bonus points
- Repeat-order points
- Special hospital campaign

Suggested demonstration calculation:
- 1 point = ₹1
- Maximum wallet redemption: 10% of cart value
- Hospital referral signup bonus: 100 points
- First eligible order discount: 5%
- Values must be editable from admin settings.

Referral statuses:
- Pending Verification
- Verified
- Rejected
- Expired

Reward ledger:
- Transaction ID
- Date
- Description
- Points credited
- Points debited
- Balance
- Related order
- Expiry date

Prevent:
- Duplicate referral bonuses
- Self-referral abuse
- Reuse of single-use codes
- Rewards on cancelled or refunded orders
- Negative point balance

6. CART PAGE

Display:
- Product image
- Product name
- Pack size
- Unit price
- Quantity selector
- Discount
- Prescription-required badge
- Remove item
- Save for later

Order summary:
- MRP total
- Product discount
- Coupon discount
- Hospital referral discount
- Reward points used
- Delivery charge
- Tax
- Final payable amount
- Total savings

Include:
- Apply coupon
- Use reward points
- Upload prescription when required
- Delivery PIN code checker
- Proceed to Checkout

Cart validation:
- Stock availability
- Maximum order quantity
- Prescription requirement
- Product expiry/batch availability
- Invalid offer
- Minimum order requirement

7. CHECKOUT PAGE

Use a clean multistep checkout:

Step 1: Delivery Address
- Select saved address
- Add new address
- Home/work/other
- Set default address

Step 2: Prescription
- Use previously uploaded prescription
- Upload new prescription
- Prescription review pending message

Step 3: Referral and Offers
- Select hospital
- Enter referral code
- Apply coupon
- Redeem points

Step 4: Delivery
- Standard delivery
- Express delivery, if enabled
- Preferred delivery date
- Delivery instructions

Step 5: Payment
- UPI
- Debit/Credit Card
- Net Banking
- Wallet
- Cash on Delivery
- Demo payment option

Step 6: Confirmation
- Complete order summary
- Address
- Payment method
- Estimated delivery
- Terms acceptance
- Place Order

For prescription-required products:
Do not finalise dispatch until the prescription is approved.

8. ORDER SUCCESS PAGE

Display:
- Order confirmation animation
- Order number
- Payment status
- Order amount
- Savings
- Delivery address
- Estimated delivery
- Track Order button
- Download Invoice button
- Continue Shopping button

9. ORDER TRACKING PAGE

Tracking timeline:
- Order Placed
- Payment Confirmed
- Prescription Under Review
- Prescription Approved
- Order Confirmed
- Processing
- Packed
- Shipped
- Out for Delivery
- Delivered

Additional statuses:
- On Hold
- Partially Available
- Cancelled
- Returned
- Refund Initiated
- Refunded
- Delivery Failed

Display:
- Tracking number
- Courier/delivery partner
- Estimated delivery date
- Last update
- Delivery support contact
- Timeline history

10. OFFERS PAGE

Show:
- Active coupons
- Hospital-specific offers
- Category offers
- Brand offers
- First-order offer
- Festival offers
- Reward point campaigns
- Free-delivery offers

Each offer card:
- Offer title
- Coupon code
- Benefit
- Minimum order value
- Maximum discount
- Validity date
- Eligible categories
- Copy Code button
- Terms button

11. ABOUT US PAGE

Include:
- Company introduction
- Mission
- Vision
- Values
- Why choose us
- Healthcare support commitment
- Secure prescription process
- Delivery coverage
- Customer-first approach

12. CONTACT PAGE

Include:
- Contact form
- Phone number
- WhatsApp number
- Email
- Office address
- Google Map placeholder
- Working hours
- Support categories
- FAQ link

Contact form:
- Name
- Mobile
- Email
- Subject
- Order number
- Message
- Submit

13. HEALTH ARTICLES PAGE

Include:
- Article cards
- Categories
- Search
- Featured article
- Related articles
- Author
- Medical reviewer field
- Last updated date
- Medical disclaimer

14. LEGAL PAGES

Create:
- Privacy Policy
- Terms and Conditions
- Shipping Policy
- Return, Cancellation and Refund Policy
- Prescription Upload Policy
- Reward Points Policy
- Hospital Referral Programme Terms
- Medical Disclaimer
- Cookie Policy

==================================================
CUSTOMER DASHBOARD
==================================================

Create an attractive private dashboard with a desktop sidebar and mobile bottom navigation.

Dashboard navigation:
- Overview
- My Orders
- Upload Prescription
- My Prescriptions
- My Cart
- Wishlist
- Hospital Referral
- Reward Points
- Coupons
- Saved Addresses
- Notifications
- Support Tickets
- Profile
- Security
- Logout

CUSTOMER DASHBOARD OVERVIEW:
Show:
- Welcome message
- Customer name
- Customer ID
- Current reward balance
- Total orders
- Active orders
- Pending prescriptions
- Total savings
- Referral hospital
- Latest order status
- Quick reorder
- Upload prescription shortcut
- Recent notifications
- Current offers

MY ORDERS:
Order card/table fields:
- Order number
- Date
- Items
- Order amount
- Payment status
- Prescription status
- Delivery status
- Estimated delivery
- View Details
- Track
- Download Invoice
- Reorder
- Cancel, subject to rules
- Request Return

ORDER DETAILS:
Show:
- Order timeline
- Products
- Price breakdown
- Prescription
- Payment details
- Delivery address
- Reward points
- Coupon
- Hospital referral discount
- Invoice
- Support button

MY PRESCRIPTIONS:
Show:
- Prescription ID
- Preview
- Upload date
- Patient name
- Hospital
- Doctor
- Status
- Admin notes
- Quotation value
- Validity
- View
- Replace
- Approve Quotation
- Reject Quotation
- Convert to Order

PRESCRIPTION QUOTATION:
Once the admin reviews the prescription, show:
- Quotation number
- Product list
- Medicine name
- Quantity
- Unit price
- Discount
- Availability
- Alternative status, where applicable
- Delivery charge
- Hospital discount
- Points redemption
- Total order value
- Estimated delivery
- Quotation expiry date
- Approve and Continue
- Request Change
- Cancel Request

REWARDS:
Show:
- Points balance
- Rupee value
- Points expiring soon
- Hospital benefit
- Transaction ledger
- Redeem rules
- Referral programme terms

PROFILE:
Allow customer to update:
- Full name
- Email
- Mobile
- Date of birth
- Gender
- Hospital association
- Doctor
- Profile image

Do not allow username/mobile change without verification.

SECURITY:
- Change password
- OTP verification
- Login history
- Active sessions
- Log out from all devices

SUPPORT TICKETS:
Allow:
- Create ticket
- Select issue type
- Enter order number
- Add message
- Upload attachment
- View ticket replies
- Track status

==================================================
MAIN ADMIN DASHBOARD
==================================================

Create a completely separate protected route:

/admin/login
/admin/dashboard

Do not combine customer and admin interfaces.

ADMIN DASHBOARD SUMMARY:
Show cards for:
- Total registered users
- Active users
- New users this month
- Users logged in today
- Total products
- Low-stock products
- Pending prescriptions
- Approved prescriptions
- Orders today
- Pending orders
- Delivered orders
- Revenue
- Discounts given
- Reward points issued
- Referral orders

Charts:
- Monthly registrations
- Monthly sales
- Orders by status
- Prescription conversion rate
- Top-selling categories
- Hospital referral performance
- Payment methods
- Delivery performance

RECENT ACTIVITY:
- New registration
- Prescription uploaded
- Order placed
- Payment completed
- Referral verified
- Product stock updated
- Admin action

ADMIN USER MANAGEMENT:
Display:
- User ID
- Name
- Username
- Mobile
- Email
- Registration date
- Last login
- Total orders
- Total spend
- Reward balance
- Referral hospital
- Status
- Actions

Admin actions:
- View profile
- Edit allowed information
- Activate
- Deactivate
- Block
- Reset password
- Adjust points
- View orders
- View prescriptions
- View login history
- Export user record

Add:
- Search
- Filter
- Pagination
- Bulk status update
- CSV export

ADMIN PRODUCT MANAGEMENT:
Product fields:
- Product ID
- Product name
- Slug
- SKU
- Barcode
- Generic/composition name
- Brand
- Manufacturer
- Category
- Subcategory
- Description
- Uses
- Directions
- Safety information
- Storage instructions
- Pack size
- MRP
- Selling price
- Tax rate
- Discount
- Stock quantity
- Minimum stock
- Prescription required
- Featured
- Best seller
- New arrival
- Active/inactive
- Product images
- SEO title
- SEO description

Actions:
- Add
- Edit
- Duplicate
- Archive
- Delete
- Bulk upload CSV
- Bulk price update
- Bulk stock update
- Export

INVENTORY AND BATCH MANAGEMENT:
Support:
- Batch number
- Manufacturing date
- Expiry date
- Purchase price
- Selling price
- Quantity
- Supplier
- Warehouse
- Batch status

Alerts:
- Low stock
- Out of stock
- Expiring soon
- Expired batch

Do not allow expired stock to be sold.

ADMIN PRESCRIPTION MANAGEMENT:
Create a prescription-review queue.

List fields:
- Prescription ID
- Customer
- Mobile
- Upload date
- Doctor
- Hospital
- Referral code
- Files
- Status
- Assigned reviewer
- Actions

Review screen:
- Large prescription preview
- Zoom
- Rotate
- Download securely
- Customer details
- Previous prescriptions
- Admin notes
- Internal notes
- Customer-visible notes

Review actions:
- Approve
- Reject
- Request clearer copy
- Mark partially approved
- Generate quotation
- Add products manually
- Enter medicine quantity
- Select product
- Add pricing
- Add delivery charge
- Add discount
- Apply referral benefit
- Set quotation validity
- Set estimated delivery
- Send quotation to customer

Maintain complete status history.

ADMIN ORDER MANAGEMENT:
Order fields:
- Order ID
- Customer
- Order date
- Products
- Prescription
- Payment method
- Payment status
- Referral source
- Reward points
- Order total
- Delivery status
- Estimated delivery
- Actions

Admin actions:
- View
- Confirm
- Put on hold
- Update payment
- Update prescription status
- Generate invoice
- Assign delivery
- Add tracking number
- Update timeline
- Cancel
- Initiate refund
- Mark delivered
- Print packing slip

ADMIN HOSPITAL MANAGEMENT:
Allow admin to:
- Add hospital
- Edit hospital
- Upload logo
- Add referral code
- Set discount
- Set point rules
- Add doctors
- Set programme validity
- Activate/deactivate hospital
- View referred customers
- View referral sales
- View points issued
- Export report

ADMIN REWARD MANAGEMENT:
Create:
- Reward settings
- Points-to-rupee conversion
- Maximum redemption percentage
- Minimum redemption
- Expiry period
- Signup bonus
- Hospital bonus
- Order points
- Promotional points
- Manual adjustment
- Full audit history

ADMIN OFFER AND COUPON MANAGEMENT:
Coupon fields:
- Code
- Title
- Description
- Discount type
- Discount amount
- Minimum order
- Maximum discount
- Start date
- End date
- Usage limit
- Per-user limit
- Eligible products
- Eligible categories
- Eligible hospitals
- First order only
- Active/inactive

ADMIN BANNER MANAGEMENT:
Allow:
- Add banner
- Desktop image
- Mobile image
- Heading
- Subheading
- CTA text
- CTA URL
- Display order
- Start/end date
- Active/inactive

ADMIN CONTENT MANAGEMENT:
Manage:
- Homepage sections
- About content
- FAQs
- Testimonials
- Health articles
- Contact details
- Footer
- Policies
- Announcements

ADMIN DELIVERY MANAGEMENT:
Fields:
- Delivery ID
- Order ID
- Delivery partner
- Tracking number
- Assigned date
- Estimated date
- Actual delivery date
- Status
- Delivery notes
- Proof of delivery

ADMIN PAYMENT MANAGEMENT:
Display:
- Payment ID
- Order ID
- Customer
- Gateway
- Transaction ID
- Amount
- Status
- Date
- Refund status

Support demo statuses:
- Pending
- Paid
- Failed
- COD
- Refund Initiated
- Refunded

ADMIN REPORTS:
Create filters and export options for:
- User report
- Login report
- Product report
- Stock report
- Expiry report
- Prescription report
- Order report
- Sales report
- Payment report
- Refund report
- Hospital referral report
- Reward points report
- Coupon report
- Delivery report

Export formats:
- CSV
- Excel-ready CSV
- Printable PDF view

ADMIN SETTINGS:
- Business details
- Logo
- Contact information
- Tax percentage
- Currency
- Delivery charge
- Free-delivery threshold
- Reward conversion
- Referral rules
- Prescription file size
- Payment methods
- Notification templates
- Maintenance mode
- Terms and policies

ADMIN AUDIT LOG:
Record:
- Admin user
- Action
- Module
- Record ID
- Previous value
- New value
- IP/device metadata
- Date and time

==================================================
DATABASE DESIGN
==================================================

Create MySQL tables for:

1. users
2. user_addresses
3. user_sessions
4. login_history
5. roles
6. permissions
7. role_permissions
8. categories
9. subcategories
10. brands
11. manufacturers
12. products
13. product_images
14. product_batches
15. inventory_transactions
16. wishlists
17. wishlist_items
18. carts
19. cart_items
20. prescriptions
21. prescription_files
22. prescription_status_history
23. prescription_quotations
24. quotation_items
25. hospitals
26. doctors
27. hospital_referral_codes
28. customer_referrals
29. reward_settings
30. reward_transactions
31. coupons
32. coupon_usage
33. offers
34. orders
35. order_items
36. order_status_history
37. payments
38. refunds
39. deliveries
40. invoices
41. notifications
42. support_tickets
43. support_messages
44. banners
45. testimonials
46. articles
47. faqs
48. contact_enquiries
49. admin_activity_logs
50. site_settings

Use:
- Primary keys
- Foreign keys
- Indexes
- Created and updated timestamps
- Soft deletion where appropriate
- Unique username
- Unique verified mobile number
- Indexed order numbers
- Indexed prescription IDs
- Indexed referral codes

Store passwords only as bcrypt hashes.

Do not store prescription files directly inside the database.
Store protected file URLs and file metadata.

==================================================
API REQUIREMENTS
==================================================

AUTHENTICATION:
- POST /api/auth/register
- POST /api/auth/verify-otp
- POST /api/auth/login
- POST /api/auth/refresh-token
- POST /api/auth/forgot-password
- POST /api/auth/reset-password
- POST /api/auth/logout
- GET /api/auth/me

PRODUCTS:
- GET /api/products
- GET /api/products/:slug
- GET /api/categories
- GET /api/brands

CART:
- GET /api/cart
- POST /api/cart/items
- PATCH /api/cart/items/:id
- DELETE /api/cart/items/:id
- POST /api/cart/apply-coupon
- POST /api/cart/apply-rewards

PRESCRIPTIONS:
- POST /api/prescriptions
- GET /api/prescriptions
- GET /api/prescriptions/:id
- POST /api/prescriptions/:id/reupload
- POST /api/quotations/:id/approve
- POST /api/quotations/:id/request-change

ORDERS:
- POST /api/orders
- GET /api/orders
- GET /api/orders/:id
- GET /api/orders/:id/tracking
- POST /api/orders/:id/cancel
- POST /api/orders/:id/reorder

REFERRALS:
- POST /api/referrals/validate
- GET /api/referrals/my-benefits
- GET /api/rewards
- GET /api/rewards/transactions

ADMIN:
- GET /api/admin/dashboard
- CRUD /api/admin/users
- CRUD /api/admin/products
- CRUD /api/admin/categories
- CRUD /api/admin/hospitals
- CRUD /api/admin/doctors
- CRUD /api/admin/offers
- CRUD /api/admin/coupons
- CRUD /api/admin/banners
- GET/PATCH /api/admin/prescriptions
- GET/PATCH /api/admin/orders
- GET/PATCH /api/admin/deliveries
- GET /api/admin/reports
- GET /api/admin/audit-logs

Create:
- Authentication middleware
- Role-based authorization middleware
- Validation middleware
- File validation middleware
- Central error handler
- API rate limiting
- Secure headers
- Request logging

==================================================
DUMMY DATA
==================================================

Generate professional dummy data:

- 25 customers
- 1 Main Admin
- 12 product categories
- 6 subcategories per major category
- 50–75 demo products
- 8 brands
- 6 manufacturers
- 5 associated hospitals
- 12 doctors
- 10 referral codes
- 8 coupons
- 6 homepage banners
- 20 orders with mixed statuses
- 12 prescriptions with mixed statuses
- 8 quotations
- 30 reward transactions
- 10 notifications
- 5 support tickets
- 6 health articles
- 8 FAQs
- 6 testimonials

Suggested hospitals:
- Seema Multispeciality Hospital
- City Care Hospital
- Shree Clinic and Diagnostic Centre
- LifeCare Hospital
- Sunrise Medical Centre

Clearly label all data as demonstration data.

Suggested dummy product categories:
- Prescription Medicines
- Personal Care
- Vitamins and Supplements
- Diabetes Care
- Healthcare Devices
- Mother and Baby Care
- Skin Care
- Hair Care
- Oral Care
- Elderly Care
- First Aid
- Ayurvedic Wellness

==================================================
NOTIFICATIONS
==================================================

Create in-app notification templates for:
- Registration successful
- OTP sent
- Prescription uploaded
- Clearer prescription requested
- Prescription approved
- Quotation generated
- Quotation expiring
- Order placed
- Payment received
- Order packed
- Out for delivery
- Order delivered
- Referral verified
- Points credited
- Points expiring
- Refund initiated
- Support ticket updated

Prepare the backend structure for future:
- SMS
- Email
- WhatsApp notification integration

==================================================
SEARCH
==================================================

Create a smart product search supporting:
- Product name
- Generic name
- Composition
- Brand
- Manufacturer
- Category
- Health concern

Features:
- Search suggestions
- Recent searches
- Popular searches
- Typo tolerance
- Empty-state suggestions
- Search result highlighting

Do not provide medical diagnosis through search.

==================================================
SECURITY AND PRIVACY
==================================================

Healthcare and prescription information is sensitive.

Implement:
- HTTPS-ready configuration
- bcrypt password hashing
- JWT expiry and refresh flow
- Secure HTTP-only cookies where applicable
- Rate limiting
- Input sanitisation
- SQL injection protection
- XSS protection
- CSRF protection where applicable
- File type and size validation
- Randomised uploaded filenames
- Protected prescription access
- Role-based access
- Audit logging
- Session expiry
- Account lock after repeated failed logins
- Masked personal information in tables
- Confirmation before destructive actions
- Database backup instructions

Prescription uploads must not be stored in a publicly accessible assets folder.

Use:
- Private storage
- Signed or authenticated file access
- Access logging
- File retention settings
- Restricted admin permissions

Add customer consent before collecting:
- Prescription data
- Doctor information
- Hospital information
- Health-related documents

==================================================
HEALTHCARE SAFETY RULES
==================================================

The platform is an ordering and fulfilment system, not a diagnosis tool.

Add these safeguards:
- Prescription medicines cannot be dispatched without valid approval.
- Do not allow customers to change prescribed dosage.
- Do not display automated medical advice.
- Do not claim that a product cures a disease.
- Show “Consult your doctor or pharmacist” where necessary.
- Show an emergency disclaimer.
- Require authorised review for substitutions.
- Prevent sale of expired products.
- Maintain prescription review history.
- Mark health articles as general information.
- Add a medical disclaimer to every medicine detail page.

==================================================
UX REQUIREMENTS
==================================================

Every form must include:
- Labels
- Placeholders
- Validation messages
- Loading state
- Error state
- Success state
- Disabled state
- Confirmation message

Every data page must include:
- Search
- Filter
- Sorting
- Pagination
- Empty state
- Loading skeleton
- Error retry
- Export where relevant

Use:
- Toast notifications
- Confirmation modals
- Skeleton loaders
- Breadcrumbs
- Tooltips
- Status badges
- Accessible modals
- Keyboard navigation
- Proper alt text

Animations:
- Subtle fade and slide animations
- Cart addition animation
- Upload progress
- Order success animation
- Dashboard counter animation
- Avoid excessive animation

==================================================
PROJECT FOLDER STRUCTURE
==================================================

Create:

/client
  /src
    /assets
    /components
    /layouts
    /pages
      /public
      /auth
      /customer
      /admin
    /services
    /hooks
    /context
    /utils
    /routes
    /data

/server
  /src
    /config
    /controllers
    /routes
    /models
    /middleware
    /services
    /validators
    /utils
  /uploads-private
  /database
    schema.sql
    seed.sql

Include:
- .env.example
- README.md
- deployment guide
- API documentation
- MySQL schema
- dummy seed data
- sample admin credentials
- sample customer credentials

==================================================
ENVIRONMENT VARIABLES
==================================================

Create .env.example with:

PORT=
NODE_ENV=
CLIENT_URL=
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
JWT_ACCESS_EXPIRES_IN=
JWT_REFRESH_EXPIRES_IN=
UPLOAD_DIR=
MAX_FILE_SIZE=
PAYMENT_GATEWAY_KEY=
PAYMENT_GATEWAY_SECRET=
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASSWORD=
SMS_API_KEY=
WHATSAPP_API_URL=

Do not hardcode secrets.

==================================================
DEMO USER CREDENTIALS
==================================================

Main Admin:
Email: admin@seemahealthcare.demo
Password: Admin@123

Demo Customer:
Username: seemauser
Mobile: 9876543210
Password: User@123

Demo OTP:
123456

Show these credentials only on the development/demo login screen.
Remove them automatically in production mode.

==================================================
EXPECTED FINAL OUTPUT
==================================================

Deliver a complete, deployable project with:

1. Responsive public e-commerce website.
2. Customer registration and login.
3. Individual customer dashboard.
4. Main Admin dashboard.
5. Product catalogue.
6. Product detail pages.
7. Cart and checkout.
8. Prescription upload and review workflow.
9. Prescription quotation generation.
10. Hospital referral system.
11. Reward points and discount system.
12. Order management.
13. Payment workflow.
14. Delivery tracking.
15. Invoice generation.
16. Offers and coupon management.
17. Product, category and stock management.
18. Reports and analytics.
19. Dummy database data.
20. MySQL schema and seed script.
21. Protected API routes.
22. Proper loading, error and empty states.
23. Deployment documentation.
24. Original professional UI inspired by the reference, not copied from it.

Do not submit only a homepage mock-up.
Do not create static dashboard cards without working navigation.
Do not leave buttons non-functional.
Do not use only browser localStorage as the final database.
Connect the major processes to the Node.js API and MySQL database.

The final portal must clearly demonstrate this end-to-end process:

Customer Registration
→ Login
→ Browse Products or Upload Prescription
→ Admin Reviews Prescription
→ Admin Generates Order Value
→ Customer Reviews Quotation
→ Hospital Referral Discount/Points Applied
→ Customer Approves
→ Cart and Checkout
→ Payment
→ Order Processing
→ Delivery Tracking
→ Delivery Completion
→ Invoice and Reward Points

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3131c760-2a1d-4246-96f7-1ab4e8c3dfa7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
