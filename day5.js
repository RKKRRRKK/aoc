const fs = require('fs');

 

fs.readFile('day5.txt', { encoding: 'utf8' }, (err, data) => {

    let pre = data.split('\r\n\r\n')
    pre = pre.map(rule => rule.split('\r\n'))
    
    let rules = pre[0]
    let ins = pre[1]

    let sep_rules = rules.map(rule =>  rule.split('|'))

    console.log(sep_rules)
    
    //create an ordered list of rules and then when checking instruction iterate over the list only once, per line, always starting from the first found number, if number is not ahead in the list of rules, the instructions are wrong
  
     let    sorted = []

    for (let i = 0; i < sep_rules.length; i++) {

        let rule = sep_rules[i]
        console.log("rule", rule)
        let left = rule[0]
        console.log("left", left)
        let right = rule[1]

        for (let j = 0; j < sep_rules.length; j++) {
            let c_rule = sep_rules[j]
            let c_left = c_rule[0]
            let c_right = c_rule[1]
            if (c_right = left) {
            sorted.push(c_rule) 

            }
        }
        sorted.push(rule) 

    }
   
    console.log(sorted)


})










