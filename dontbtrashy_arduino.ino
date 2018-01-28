/*
   BYJ48 Stepper motor code
   Connect :
   IN1 >> D8
   IN2 >> D9
   IN3 >> D10
   IN4 >> D11
   VCC ... 5V Prefer to use external 5V Source
   Gnd
   written By :Mohannad Rawashdeh
  https://www.instructables.com/member/Mohannad+Rawashdeh/
     28/9/2013
  */

#define IN1  4
#define IN2  5
#define IN3  6
#define IN4  7

#define IN5  8
#define IN6  9
#define IN7  10
#define IN8  11
int Steps = 100;
boolean Direction = true;// gre
unsigned long last_time;
unsigned long currentMillis ;
int steps_left=4095;
long time;

bool recycle = true;

void setup()
{
Serial.begin(115200);
pinMode(IN1, OUTPUT); 
pinMode(IN2, OUTPUT); 
pinMode(IN3, OUTPUT); 
pinMode(IN4, OUTPUT);
 
pinMode(IN5, OUTPUT); 
pinMode(IN6, OUTPUT); 
pinMode(IN7, OUTPUT); 
pinMode(IN8, OUTPUT); 
// delay(1000);

}
void loop()

{
  Direction=Direction;
  while(steps_left>0){
  currentMillis = micros();
  if(currentMillis-last_time>=1000){

    if (recycle == true)
    {
    stepper1(1); /* First moter */
    }
    if (recycle == false)
    {
    stepper2(1); /* Second moter */
    
    }

    if (steps_left == 1)
    {
      abort();   /* The laziest way to stop running */
    }

  time=time+micros()-last_time;
  last_time=micros();
  steps_left--;
  }
  }
   Serial.println(time);
  Serial.println("Wait...!");
  delay(2000);
  
  steps_left=4095;
 
}

void stepper1(int xw ){
  for (int x=0;x<xw;x++){
switch(Steps){
   case 0:
     digitalWrite(IN1, LOW); 
     digitalWrite(IN2, LOW);
     digitalWrite(IN3, LOW);
     digitalWrite(IN4, HIGH);
   break; 
   case 1:
     digitalWrite(IN1, LOW); 
     digitalWrite(IN2, LOW);
     digitalWrite(IN3, HIGH);
     digitalWrite(IN4, HIGH);
   break; 
   case 2:
     digitalWrite(IN1, LOW); 
     digitalWrite(IN2, LOW);
     digitalWrite(IN3, HIGH);
     digitalWrite(IN4, LOW);
   break; 
   case 3:
     digitalWrite(IN1, LOW); 
     digitalWrite(IN2, HIGH);
     digitalWrite(IN3, HIGH);
     digitalWrite(IN4, LOW);
   break; 
   case 4:
     digitalWrite(IN1, LOW); 
     digitalWrite(IN2, HIGH);
     digitalWrite(IN3, LOW);
     digitalWrite(IN4, LOW);
   break; 
   case 5:
     digitalWrite(IN1, HIGH); 
     digitalWrite(IN2, HIGH);
     digitalWrite(IN3, LOW);
     digitalWrite(IN4, LOW);
   break; 
     case 6:
     digitalWrite(IN1, HIGH); 
     digitalWrite(IN2, LOW);
     digitalWrite(IN3, LOW);
     digitalWrite(IN4, LOW);
   break; 
   case 7:
     digitalWrite(IN1, HIGH); 
     digitalWrite(IN2, LOW);
     digitalWrite(IN3, LOW);
     digitalWrite(IN4, HIGH);
   break; 
   default:
     digitalWrite(IN1, LOW); 
     digitalWrite(IN2, LOW);
     digitalWrite(IN3, LOW);
     digitalWrite(IN4, LOW);
   break; 


   
}
SetDirection();


  } 
  }
  


void stepper2(int xw )
{
  for (int x=0;x<xw;x++){
switch(Steps){
   case 0:
     digitalWrite(IN5, LOW); 
     digitalWrite(IN6, LOW);
     digitalWrite(IN7, LOW);
     digitalWrite(IN8, HIGH);
   break; 
   case 1:
     digitalWrite(IN5, LOW); 
     digitalWrite(IN6, LOW);
     digitalWrite(IN7, HIGH);
     digitalWrite(IN8, HIGH);
   break; 
   case 2:
     digitalWrite(IN5, LOW); 
     digitalWrite(IN6, LOW);
     digitalWrite(IN7, HIGH);
     digitalWrite(IN8, LOW);
   break; 
   case 3:
     digitalWrite(IN5, LOW); 
     digitalWrite(IN6, HIGH);
     digitalWrite(IN7, HIGH);
     digitalWrite(IN8, LOW);
   break; 
   case 4:
     digitalWrite(IN5, LOW); 
     digitalWrite(IN6, HIGH);
     digitalWrite(IN7, LOW);
     digitalWrite(IN8, LOW);
   break; 
   case 5:
     digitalWrite(IN5, HIGH); 
     digitalWrite(IN6, HIGH);
     digitalWrite(IN7, LOW);
     digitalWrite(IN8, LOW);
   break; 
     case 6:
     digitalWrite(IN5, HIGH); 
     digitalWrite(IN6, LOW);
     digitalWrite(IN7, LOW);
     digitalWrite(IN8, LOW);
   break; 
   case 7:
     digitalWrite(IN5, HIGH); 
     digitalWrite(IN6, LOW);
     digitalWrite(IN7, LOW);
     digitalWrite(IN8, HIGH);
   break; 
   default:
     digitalWrite(IN5, LOW); 
     digitalWrite(IN6, LOW);
     digitalWrite(IN7, LOW);
     digitalWrite(IN8, LOW);
   break; 
}
SetDirection();


/*SetDirection();*/
}
} 


void SetDirection(){
if(Direction==1){ Steps++;}
if(Direction==0){ Steps--; }
if(Steps>7){Steps=0;}
if(Steps<0){Steps=7; }
}


