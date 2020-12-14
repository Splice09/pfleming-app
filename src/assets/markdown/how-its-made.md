# HOW IT'S MADE
1. #### Create [AWS Account](https://aws.amazon.com/free/?trk=ps_a134p000003yBfsAAE&trkCampaign=acq_paid_search_brand&sc_channel=ps&sc_campaign=acquisition_US&sc_publisher=google&sc_category=core&sc_country=US&sc_geo=NAMER&sc_outcome=acq&sc_detail=%2Bcreate%20%2Baws%20%2Baccount&sc_content=Account_bmm&sc_segment=438195700988&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|AWS|Core|US|EN|Text&s_kwcid=AL!4422!3!438195700988!b!!g!!%2Bcreate%20%2Baws%20%2Baccount&ef_id=CjwKCAiA-_L9BRBQEiwA-bm5fplQsDBE19CZknHgxWUqxq6H77Ws6v-TR9Zzt7OI9mYZZ1Ycki7X1BoCeEsQAvD_BwE:G:s&s_kwcid=AL!4422!3!438195700988!b!!g!!%2Bcreate%20%2Baws%20%2Baccount&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc)
2. #### Create [AWS User](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) for the Account
3. #### Install [AWS CLI](https://aws.amazon.com/cli/)
4. #### Install latest [Node JS](https://nodejs.org/en/)
5. #### Install latest [NPM](https://www.npmjs.com/get-npm)
6. #### Install latest [Angular](https://www.npmjs.com/package/@angular/cli)
7. #### Create new [Angular Project](https://angular.io/cli)
8. #### Creat [Github Repository](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/create-a-repo) and push base project to GitHub
9. #### [Configure AWS CLI Credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) with: aws configure (credentials downloaded as CSV from AWS user account)
10. #### Create AWS S3 Bucket and set as [Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)
11. #### Set AWS S3 Bucket :arrow_right: Permissions :arrow_right: [Bucket Policy (see step 3)](https://medium.com/serverlessguru/deploying-angular-to-aws-in-seconds-or-10-minutes-941faa8c0aab) to allow anonymous user deployment (for AWS CLI)
12. #### Add script to package.json to allow for [AWS CLI deployment (see step 4)](https://medium.com/serverlessguru/deploying-angular-to-aws-in-seconds-or-10-minutes-941faa8c0aab)
13. #### Deploy APP: ng build && npm run aws-deploy
14. #### Request SSL Cert from AWS via [ACM Service](https://aws.amazon.com/certificate-manager/) for owned domain 
15. #### Update CNAME record on domain registrar to match ACM on AWS
16. #### Create [Cloudfront Distribution](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-https-requests-s3/) using the cert from step 14
17. #### Update @ and WWW CNAME on domain registrar to point to Cloudfront
18. #### Add [AppRouting](https://angular.io/guide/router) to the angular project
19. #### Set up application skeleton with functional routing
20. #### Build out homepage including mobile styling
21. #### Add [ngx-markdown](https://www.npmjs.com/package/ngx-markdown) package for markdown rendering on learning
22. #### Build out Learning page (including mobile styling)
23. #### Build out Writing main link template and link to first blank article (including mobile styling)