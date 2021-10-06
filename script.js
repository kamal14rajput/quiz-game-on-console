function Question(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

var q1 = new Question('Is Javascript the coolest programming language in the world?', 
                     ['yes', 'no'],
                     0);
                     
var q2 = new Question('What is the name of this Developer?',
                      ['Rahul', 'Rohit', 'Kamal'],
                      2);
                      

