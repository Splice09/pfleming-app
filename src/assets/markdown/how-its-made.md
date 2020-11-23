# HOW IT'S MADE
### 1. Create AWS Account
### 2. Create AWS User for the Account
### 3. Install AWS CLI
### 4. Install latest Node JS
### 5. Install latest NPM
### 6. Install latest Angular
### 7. Create new Angular Project
### 8. Creat GIT repo and push base project to GIT
### 9. Enter AWS credentials with: aws configure (credentials downloaded as CSV from AWS user account)
### 10. Set AWS S3 Bucket as Static Website Hosting
### 11. Set AWS S3 Bucket :arrow_right: Permissions :arrow_right: Bucket Policy to allow public read access
### 12. Add script to package.json to allow for AWS CLI deploy
### 13. Deploy APP: ng build && npm run aws-deploy
### 14. Request SSL Cert from AWS :arrow_right: ACM Service for owned domain 
### 15. Update CNAME record on domain registrar to match ACM on AWS
### 16. Create Cloudfront distribution using the cert from step 14
### 17. Update @ and WWW CNAME on domain registrar to point to Cloudfront
### 18. Add AppRouting to the angular project
### 19. Set up routing skeleton on app
### 20. Build out homepage including mobile styling
### 21. Add ngx-markdown package for markdown rendering on learning
### 22. Build out learning page including mobile styling