gameState = "first";

function preload(){
    bg = loadImage("bg.jpeg");
    be = loadImage("beaeater.jpeg");
    gre = loadImage("grebe.jpeg"); 
    horn = loadImage("hornbill.jpeg");
    humming = loadImage("hummingbird.jpeg");
    l1g = loadImage("line1 g.png");
    p1c = loadImage("para1 c.png");
    bees = loadSound("beeeater.mp3");
    gres = loadSound("grebe.mp3");
    hum = loadSound("hummingbird.mp3");
    hor = loadSound("hornbill.mp3");
    l1c = loadImage("line1 c.png");
    p2c = loadImage("para2 c.png");
    p3c = loadImage("para3 c.png");
    l2c = loadImage("line2 c.png");
    p1d = loadImage("para1 d.png");
    p2d = loadImage("para2 d.png");
    p3d = loadImage("para3 d.png");
    l1d = loadImage("line1 d.png");
    l2d = loadImage("line2 d.png");
    p1e = loadImage("para1 e.png");
    p2e = loadImage("para2 e.png");
    p3e = loadImage("para3 e.png");
    p1f = loadImage("para1 f.png");
    l1e = loadImage("line1 e.png");
    l2e = loadImage("line2 e.png");
    l1f = loadImage("line1 f.png");
    l2f = loadImage("line2 f.png");
    startani = loadImage("loading1.png");
    startani2 = loadImage("loading2.png");
    startani3 = loadImage("completed.png");
  }
  
  function setup() {
      createCanvas(1280,721);

      startAni = createSprite(600,300);
      startAni.addImage(startani);
      startAni.visible = false;

      block = createSprite(200,400,20,20);
      block.shapeColor = "white";
      block.visible = false;

      start = createButton("VIEW");
      start.position(850,355);
      start.style('font-size', '60px');
      start.style('color', 'blue');
      start.style('background', 'orange');
      start.mousePressed(viewAll);

      view1 = createButton("VIEW");
      view1.position(440,110);
      view1.style('font-size', '50px');
      view1.style('color', 'blue');
      view1.style('background', 'green');
      view1.mousePressed(viewa);
      view1.hide();

      view2 = createButton("VIEW");
      view2.position(1050,110);
      view2.style('font-size', '50px');
      view2.style('color', 'blue');
      view2.style('background', 'green');
      view2.mousePressed(viewb);
      view2.hide();

      view3 = createButton("VIEW");
      view3.position(470,505);
      view3.style('font-size', '50px');
      view3.style('color', 'blue');
      view3.style('background', 'green');
      view3.mousePressed(viewc);
      view3.hide();

      view4 = createButton("VIEW");
      view4.position(1020,505);
      view4.style('font-size', '50px');
      view4.style('color', 'blue');
      view4.style('background', 'green');
      view4.mousePressed(viewd);
      view4.hide();

      end = createButton("END");
      end.position(1120,635);
      end.style('font-size', '50px');
      end.style('color', 'red');
      end.style('background', 'lightblue');
      end.mousePressed(End);
      end.hide();
  
      back1 = createButton("Home");
      back1.position(1100,595);
      back1.style('font-size', '40px');
      back1.style('color', 'red');
      back1.style('background', 'blue');
      back1.mousePressed(backa);
      back1.hide();

      back2 = createButton("Reset");
      back2.position(1095,625);
      back2.style('font-size', '60px');
      back2.style('color', 'red');
      back2.style('background', 'lightblue');
      back2.mousePressed(backb);
      back2.hide();

      beess = createButton("Hear");
      beess.position(400,650);
      beess.style('font-size', '40px');
      beess.mousePressed(bees1);
      beess.hide();

      gress = createButton("Hear");
      gress.position(400,650);
      gress.style('font-size', '40px');
      gress.mousePressed(gres1);
      gress.hide();

      humm = createButton("Hear");
      humm.position(400,650);
      humm.style('font-size', '40px');
      humm.mousePressed(hum1);
      humm.hide();

      hornn = createButton("Hear");
      hornn.position(400,650);
      hornn.style('font-size', '40px');
      hornn.mousePressed(horn1);
      hornn.hide();

      beeeater = createSprite(200,150);
      beeeater.addImage(be);
      beeeater.visible = false;
  
      grebe = createSprite(800,150);
      grebe.addImage(gre);
      grebe.visible = false;
  
     hummingBird = createSprite(200,550);
     hummingBird.addImage(humming);
     hummingBird.visible = false;
  
     hornbill= createSprite(800,550);
     hornbill.addImage(horn);
     hornbill.visible = false;

     line1g = createSprite(-200,330);
     line1g.addImage(l1g);

     para1c = createSprite(655,-200);
     para1c.addImage(p1c);
     para1c.visible = false;

     para2c = createSprite(648,-200);
     para2c.addImage(p2c);
     para2c.visible = false;

     para3c = createSprite(635,-500);
     para3c.addImage(p3c);
     para3c.visible = false;

     line1c = createSprite(-200,623);
     line1c.addImage(l1c);
     line1c.visible = false;

     line2c = createSprite(-200,40);
     line2c.addImage(l2c);
     line2c.visible = false;

     para1d = createSprite(650,300);
     para1d.addImage(p1d);
     para1d.visible = false;

     para2d = createSprite(625,300);
     para2d.addImage(p2d)
     para2d.visible = false;

     para3d = createSprite(666,300);
     para3d.addImage(p3d);
     para3d.visible = false;

     line1d = createSprite(-200,623);
     line1d.addImage(l1d);
     line1d.visible = false;

     line2d = createSprite(-200,40);
     line2d.addImage(l2d);
     line2d.visible = false;

     para1e = createSprite(650,300);
     para1e.addImage(p1e);
     para1e.visible = false;

     para2e = createSprite(645,300);
     para2e.addImage(p2e)
     para2e.visible = false;

     para3e = createSprite(646,300);
     para3e.addImage(p3e);
     para3e.visible = false;

     line1e = createSprite(-200,623);
     line1e.addImage(l1e);
     line1e.visible = false;

     line2e = createSprite(-200,40);
     line2e.addImage(l2e);
     line2e.visible = false;

     para1f = createSprite(650,300);
     para1f.addImage(p1f);
     para1f.visible = false;

     line1f = createSprite(-200,623);
     line1f.addImage(l1f);
     line1f.visible = false;

     line2f = createSprite(-200,40);
     line2f.addImage(l2f);
     line2f.visible = false;

     inv1g = createSprite(995,390,10,50);
     inv1g.visible = false;

     inv1c = createSprite(500,335,200,200);
     inv1c.visible = false;

     inv2c = createSprite(500,468,200,200);
     inv2c.visible = false;

     inv3c = createSprite(500,641,200,200);
     inv3c.visible = false;

     inv4c= createSprite(480,605,30,30)
     inv4c.visible= false;

     inv5c = createSprite(689,50,20,80);
     inv5c.visible = false;
     
     inv1d = createSprite(500,275,200,200);
     inv1d.visible = false;

     inv2d = createSprite(500,448,200,200);
     inv2d.visible = false;

     inv3d = createSprite(500,591,200,200);
     inv3d.visible = false;

     inv4d= createSprite(480,605,30,30)
     inv4d.visible= false;

     inv5d = createSprite(659,50,20,80);
     inv5d.visible = false;
     
     inv1e = createSprite(500,305,200,200);
     inv1e.visible = false;

     inv2e = createSprite(500,475,200,200);
     inv2e.visible = false;

     inv3e = createSprite(500,591,200,200);
     inv3e.visible = false;

     inv4e= createSprite(480,605,30,30)
     inv4e.visible= false;

     inv5e = createSprite(659,50,20,80);
     inv5e.visible = false;

     inv1f = createSprite(500,575,200,200);
     inv1f.visible = false;

     inv2f = createSprite(480,605,30,30);
     inv2f.visible = false;
     
     inv3f = createSprite(659,50,20,80);
     inv3f.visible = false;
     
    }
    
    function draw() {
      if(gameState === "first" || gameState === "second"){
        background(0);
      }else{
        background(bg);
      }
      console.log(gameState);
  
      //→

      if(gameState === "first"){
        line1g.visible = false;
        start.hide(); 
        startAni.visible = true;  
        block.velocityX = 5;

        if(block.x > 320){
          startAni.addImage(startani2);
        }
  
        if(block.x > 480){
          startAni.addImage(startani3);
        }
        
      if(keyDown("Enter") && block.x >= 685){
        gameState = "second";
      }
      }

      if(gameState === "second"){
        startAni.visible = false;
        block.x = 200;
        textSize(30);
        fill("white");
        text("The coming next are information of some birds",300,200)
        text("Its Just for reading",420,250)
        text("So Enjoy!!😇",480,350);
        text("To continue press 'SPACE' key",340,400);
        if(keyDown("Space")){
          gameState = "a";
        }
      }
  
      if(gameState === "a"){
        textSize(60);
          fill("blue");
          stroke("black");
          strokeWeight(20);
         text("Information of four birds ↓", 270,300);
         line1g.visible = false;
         line1g.x = -500;
         line1g.y = 330;
         start.show();
      }
  
      if(gameState === "b"){
        beeeater.visible = true;
       grebe.visible = true;
       hummingBird.visible = true;
       hornbill.visible = true;
       para1c.visible = false;
       para2c.visible = false;
       para3c.visible = false;
       line1c.visible = false;
       line2c.visible = false;
       para1d.visible = false;
       para2d.visible = false;
       para3d.visible = false;
       line1d.visible = false;
       line2d.visible = false;
       para1e.visible = false;
       para2e.visible = false;
       para3e.visible = false;
       line1e.visible = false;
       line2e.visible = false;
       para1f.visible = false;
       line1f.visible = false;
       line2f.visible = false;
       para1c.y = -200;
       para2c.y = -200;
       para3c.y = -200;
       line1c.x = -200;
       line2c.x = -200;
       para1d.y = -200;
       para2d.y = -200;
       para3d.y = -200;
       line1d.x = -200;
       line2d.x = -200;
       para1e.y = -200;
       para2e.y = -200;
       para3e.y = -200;
       line1e.x = -200;
       line2e.x = -200;
       para1f.y = -200;
       line1f.x = -200;
       line2f.x = -200;
       view1.show();
       view2.show();
       view3.show();
       view4.show();
       beess.hide();
       gress.hide();
       humm.hide();
       hornn.hide();
       end.show();
       textSize(100);
       fill("teal");
       text("⇆", 330,180);
       text("⇆", 945,180);
       text("⇆", 363,580);
       text("⇆", 910,580);
       //➳
       //⇆
       //
       textSize(50);
       fill("white");
       text("Bee-Eater", 85,295);
       text("Grebe", 735,295);
       text("Humming Bird", 40,695);
       text("Hornbill", 720,695);
      }

      if(gameState === "c"){
        beeeater.visible = false;
        grebe.visible = false;
        hummingBird.visible = false;
        hornbill.visible = false;
        para1c.visible = true;
        para2c.visible = true;
        para3c.visible = true;
        line1c.visible = true;
        line2c.visible = true;
        para1c.velocityY = 8;
        para2c.velocityY = 8;
        para3c.velocityY = 8;
        line1c.velocityX = 6;
        line2c.velocityX = 15;
        if(para3c.collide(inv3c)){
          back1.show();
        }
        view2.hide();
        view3.hide();
        view4.hide();
        end.hide();
        if(line1c.collide(inv4c)){
          beess.show();
        }
        //  fill("white");
        //  stroke("black");
        //  strokeWeight(4);
        //  textSize(25);
        // text("The bee-eaters are a group of near passerine birds in the family Meropidae, containing three genera",100,100)
        // text("and twenty-seven species. Most species are found in Africa and Asia, with a few in southern Europe,",100,130)
        // text("Australia, and New Guinea. They are characterised by richly coloured plumage, slender bodies, and",100,160)
        // text("usually elongated central tail feathers. All have long down-turned bills and medium to long wings,",100,190)
        // text("which may be pointed or round. Male and female plumages are usually similar.",100,220)
        // text("As their name suggests, bee-eaters predominantly eat flying insects, especially bees and wasps,",100,270)
        // text("which are caught on the wing from an open perch. The stinger is removed by repeatedly hitting and",100,300)
        // text("rubbing the insect on a hard surface. During this process, pressure is applied to the insect,",100,330)
        // text("thereby discharging most of the venom.",100,360)
        // text("Most bee-eaters are gregarious. They form colonies, nesting in burrows tunnelled into vertical",100,410)
        // text("sandy banks, often at the side of a river or in flat ground. As they mostly live in colonies,",100,440)
        // text("large numbers of nest holes may be seen together. The eggs are white, with typically five to",100,470)
        // text("the clutch. Most species are monogamous, and both parents care for the young, sometimes with",100,500)
        // text("assistance from related birds in the colony.",100,530)
        // fill("teal");
        // stroke("black");
        // strokeWeight(6);
        // textSize(20);
         //text("BEE - EATER",510,50)
      }

      if(gameState === "d"){
        beeeater.visible = false;
        grebe.visible = false;
        hummingBird.visible = false;
        hornbill.visible = false; 
        para1d.visible = true;
        para2d.visible = true;
        para3d.visible = true;
        line1d.visible = true;
        line2d.visible = true;
        para1d.velocityY = 8;
        para2d.velocityY = 8;
        para3d.velocityY = 8;
        line1d.velocityX = 6;
        line2d.velocityX = 15;
        if(para3d.collide(inv3d)){
          back1.show();
        }
        if(line1d.collide(inv4d)){
          gress.show();
        }
        view1.hide();
        view3.hide();
        view4.hide();
        end.hide();
        //  fill("white");
        //  stroke("black");
        //  strokeWeight(4);
        //  textSize(25);
        // text("Grebes are small to medium-large in size, have lobed toes, and are excellent swimmers and divers.",100,100);
        //  text("Although they can run for a short distance, they are prone to falling over, since they have their feet",100,130)
        //  text("placed far back on the body.",100,160)
        //  text("Grebes have narrow wings, and some species are reluctant to fly; indeed, two South American",100,210)
        //  text("species are completely flightless.They respond to danger by diving rather than flying, and",100,240)
        //  text("are in any case much less wary than ducks. Extant species range in size from the least grebe,",100,270)
        //  text("at 120 grams (4.3 oz) and 23.5 cm (9.3 inches), to the great grebe, at 1.7 kg (3.8 lbs) and",100,300)
        //  text("71 cm (28 inches).",100,330)
        //  text("The North American and Eurasian species are all, of necessity, migratory over much or all of their",100,380)
        //  text("ranges,and those species that winter at sea are also seen regularly in flight. Even the small freshwater",100,410)
        //  text("freshwater pied-billed grebe of North America has occurred as a transatlantic vagrant to Europe on",100,440)
        //  text("more than 30 occasions.",100,470)
        //  fill("teal");
        // stroke("black");
        // strokeWeight(6);
        // textSize(25);
        //  text("Grebe",550,50)
      }

      if(gameState === "e"){
        beeeater.visible = false;
        grebe.visible = false;
        hummingBird.visible = false;
        hornbill.visible = false;
        para1e.visible = true;
        para2e.visible = true;
        para3e.visible = true;
        line1e.visible = true;
        line2e.visible = true;
        para1e.velocityY = 8;
        para2e.velocityY = 8;
        para3e.velocityY = 8;
        line1e.velocityX = 6;
        line2e.velocityX = 15;
        if(para3e.collide(inv3e)){
          back1.show();
        }
        if(line1e.collide(inv4e)){
          humm.show();
        }
        view1.hide();
        view2.hide();
        view4.hide();
        end.hide();
        // fill("white");
        // stroke("black");
        // strokeWeight(4);
        // textSize(25);
        // text("Hummingbirds are birds native to the Americas and constituting the biological family Trochilidae.They",100,100);
        // text("are the smallest of birds, most species measuring 7.5–13 cm (3–5 in) in length. The smallest extant",100,130)
        // text("hummingbird species is the 5 cm (2.0 in) bee hummingbird, which weighs less than 2.0 g (0.07 oz).The",100,160)
        // text("largest hummingbird species is the 23 cm (9.1 in) giant hummingbird, weighing 18–24 g (0.63–0.85 oz).",100,190)
        // text("They are known as hummingbirds because of the humming sound created by their beating wings, which",100,240)
        // text("flap at high frequencies audible to humans. They hover in mid-air at rapid wing-flapping rates,",100,270)
        // text("which vary from around 12 beats per second in the largest species, to in excess of 80 in some of",100,300)
        // text("the smallest. Of those species that have been measured in wind tunnels, their top speeds exceed",100,330)
        // text("15 m/s (54 km/h; 34 mph) and some species can dive at speeds in excess of 22 m/s (79 km/h; 49 mph).",100,360)
        // text("Hummingbirds have the highest mass-specific metabolic rate of any homeothermic animal.To conserve",100,410)
        // text("energy when food is scarce and nightly when not foraging, they can go into torpor,a state similar",100,440)
        // text("to hibernation, and slow their metabolic rate to 1/15 of its normal rate.",100,470)
        // fill("teal");
        // stroke("black");
        // strokeWeight(6);
        // textSize(25);
        // text("Humming Bird",520,50)
      }

      if(gameState === "f"){
        beeeater.visible = false;
        grebe.visible = false;
        hummingBird.visible = false;
        hornbill.visible = false;
        para1f.visible = true;
        line1f.visible = true;
        line2f.visible = true;
        para1f.velocityY = 8;
        line1f.velocityX = 6;
        line2f.velocityX = 15;
        if(para1f.collide(inv1f)){
          back1.show();
        }
        if(line1f.collide(inv2f)){
          hornn.show();
        }
        view1.hide();
        view2.hide();
        view3.hide();
        end.hide();
        // fill("white");
        // stroke("black");
        // strokeWeight(4);
        // textSize(25);
        // text("Hornbills show considerable variation in size. The smallest species is the black dwarf hornbill",100,100);
        // text("(Tockus hartlaubi), at 99.1 g (3.50 oz) and 32 cm (1 ft 1 in) in length.[3][4] The largest and",100,130)
        // text("most massive species appears to be the southern ground hornbill which has an average weight of",100,160)
        // text("3.77kg (8.3 lb), and can weigh up to 6.3 kg (14 lb) and span about 180 cm (5 ft 11 in) across",100,190)
        // text("the wings.Other species rival the southern ground species in length, at up to about 130 cm,",100,220)
        // text("(4 ft 3 in) including the Abyssinian ground hornbill (Bucorvus abyssinicus), the great hornbill",100,250)
        // text("(Buceros bicornis) and, probably the longest of all (perhaps exceeding 150 cm (4 ft 11 in)) thanks",100,280)
        // text("in part to its extended tail feathers,the helmeted hornbill (Rhinoplax vigil).[3][6] Males are always",100,310)
        // text(" bigger than the females, though the extent to which this is true varies according to species. The",100,340)
        // text("extent of sexual dimorphism also varies with body parts. For example, the difference in body mass",100,370)
        // text("between males and females is 1–17% but the variation is 8–30% for bill length and 1–21% in",100,400)
        // text("wing length.",100,430)
        // fill("teal");
        // stroke("black");
        // strokeWeight(6);
        // textSize(25);
        // text("Hornbill",530,50)
      }

      if(gameState === "g"){
        beeeater.visible = false;
        grebe.visible = false;
        hummingBird.visible = false;
        hornbill.visible = false;
        line1g.visible = true;

        view1.hide();
        view2.hide();
        view3.hide();
        view4.hide();

        // textSize(150);
        //   fill("blue");
        //   stroke("black");
        //   strokeWeight(20);
        //  text("Thank You", 270,380);
 
        if(line1g.collide(inv1g)){
          back2.show();
        }
   
        line1g.velocityX = 10;
      
      }

      line1g.collide(inv1g);
      para1c.collide(inv1c);
      line1c.collide(inv4c);
      para2c.collide(inv2c);
      para3c.collide(inv3c);
      line2c.collide(inv5c);
      para1d.collide(inv1d);
      line1d.collide(inv4d);
      para2d.collide(inv2d);
      para3d.collide(inv3d);
      line2d.collide(inv5d);
      para1e.collide(inv1e);
      para2e.collide(inv2e);
      para3e.collide(inv3e);
      line1e.collide(inv4e);
      line2e.collide(inv5e);
      para1f.collide(inv1f);
      line1f.collide(inv2f);
      line2f.collide(inv3f);
      drawSprites();
    }
  
    function viewAll(){
      start.hide();
      gameState = "b";
    }
  
    function viewa(){
      view1.hide();
      gameState = "c";
    }

    function backa(){
      gameState = "b";
      back1.hide();
    }

    function viewb(){
      view2.hide();
      gameState = "d";
    }

    function viewc(){
      view3.hide();
      gameState = "e";
    }

    function viewd(){
      view4.hide();
      gameState = "f";
    }

    function End(){
      end.hide();
      gameState = "g";
    }

    function backb(){
      gameState = "a";
      back2.hide();
    }
  
    function bees1(){
      if(gameState === "c"){
        bees.play();
      }
      
    }

    function gres1(){
      if(gameState === "d"){
        gres.play();
      }
    }
  
    function hum1(){
      if(gameState === "e"){
        hum.play();
      }
    }

    function horn1(){
      if(gameState === "f"){
        hor.play();
      }
    }
