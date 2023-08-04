/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function(emails) {
    const uniqueEmails = new Set()

    emails.forEach(mail => {
        const [local, domain] = mail.split('@');
        const name = local.split('+')[0].replaceAll('.', '');
        const cleanMail = name + '@' + domain;

        uniqueEmails.add(cleanMail)    
    });
    
    return uniqueEmails.size;
};


/* Examples:

Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3

*/