class Form {
  constructor(){
    //the titles on the top of the survey page
    this.title = createElement('h1');
    this.title2 = createElement('h2');

    // the title when the survey is complete
    this.endTitle = createElement('h1');

    //details to fill in to update the database
    this.name = createInput("Name");
    this.email = createInput('Email Address');
    this.location = createInput('Place where you live');
    this.submit = createButton('SUBMIT');

    //serial numbers of the details to fill in
    this.one = createElement('h3');
    this.two = createElement('h3');
    this.three = createElement('h3');
    this.four = createElement('h3');
    this.five = createElement('h3');
    this.six = createElement('h3');
    this.seven = createElement('h3');
    this.eight = createElement('h3');

    //the questions
    this.q1text = createElement('h3');
    this.question1 = createRadio('Q1');
      this.question1.option("Yes");
      this.question1.option("No");

    this.q2text = createElement('h3');
    this.question2 = createRadio('Q2');
      this.question2.option("Yes");
      this.question2.option("No");

    this.q3text = createElement('h3');
    this.question3 = createRadio('Q3');
      this.question3.option("Yes");
      this.question3.option("No");
    
    this.q4text = createElement('h3');
    this.question4 = createInput('Enter your suggestions here');

    this.q5text = createElement('h3');
    this.question5 = createInput('Enter your ideas here');
  }
  hide(){
    //hides the heading and sub heading
    this.title.hide();
    this.title2.hide();

    //hides other things
    this.name.hide();
    this.submit.hide();
    this.email.hide();
    this.location.hide();

    //hides the serial numbers
    this.one.hide();
    this.two.hide();
    this.three.hide();
    this.four.hide();
    this.five.hide();
    this.six.hide();
    this.seven.hide();
    this.eight.hide();

    //hides the questions and their radios
    this.q1text.hide();
    this.question1.hide();

    this.q2text.hide();
    this.question2.hide();

    this.q3text.hide();
    this.question3.hide();

    this.q4text.hide();
    this.question4.hide();

    this.q5text.hide();
    this.question5.hide();
  }

  display(){
    //displays the title and sub title
    this.title.html("Welcome to the Survey!");
    this.title.position((windowWidth-10)/2-150, 10);
    this.title2.html("To participate in the survey, please fill the following and press SUBMIT when done.")
    this.title2.position((windowWidth-10)/4,60);
    
    //the details' positions
    this.name.position(150,160);
    this.submit.position(windowWidth-200,windowHeight-130);
    this.email.position(150,200);
    this.location.position(150,240);

    //the serial numbers and their positions
    this.one.html("1.");
    this.two.html("2.");
    this.three.html("3.");
    this.four.html("4.");
    this.five.html("5.");
    this.six.html("6.");
    this.seven.html("7.");
    this.eight.html("8.");

    this.one.position(127.5,140);
    this.two.position(127.5,180);
    this.three.position(127.5,220);
    this.four.position(127.5,260);
    this.five.position(127.5,350);
    this.six.position(127.5,440);
    this.seven.position(127.5,530);
    this.eight.position(127.5,590);

    //the questions and their positions
    this.q1text.html("Do you think it is important to have good infrastructure and public facilities?");
    this.q2text.html("Do you live in a place with good infrastructure and public facilities?");
    this.q3text.html("Would you like to improve them?");
    this.q4text.html("What would you do to improve them?");
    this.q5text.html("What do you think must be done to improve them?");

    this.q1text.position(150,260);
    this.q2text.position(150,350);
    this.q3text.position(150,440);
    this.q4text.position(150,530);
    this.q5text.position(150,590);

    this.question1.position(150,300);
    this.question2.position(150,390);
    this.question3.position(150,480);
    this.question4.position(150,570);
    this.question5.position(150,630);
    
    //what will happen when SUBMIT is pressed
    this.submit.mousePressed(()=>{
      this.hide();

      user.name = this.name.value();
      user.email = this.email.value();
      user.answer_1 = this.question1.value();
      user.answer_2 = this.question2.value();
      user.answer_3 = this.question3.value();
      user.answer_4 = this.question4.value();
      user.answer_5 = this.question5.value();

      user.index++
      user.update(this.name.value());

      this.endTitle.html("Thank you for filling out this survey!");
      this.endTitle.position((windowWidth-10)/2-220,(windowHeight-10)/2-50);
      this.endTitle.display();
    });
  }
}
