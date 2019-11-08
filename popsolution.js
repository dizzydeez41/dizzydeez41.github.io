//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="You're awesome."
compliments[1]="Exactly."
compliments[2]="You're brilliant, you know that?"
compliments[3]="Right on."
compliments[4]="You always seem to impress me. I love it."
compliments[5]="Well done, darling."
compliments[6]="You got that spark, Kid."


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="In Bad Day at Black Rock, what did Sam lose when his luck turned bad?"
choice1[1]="His soul."
choice1[2]="A journal."
choice1[3]="A bet."
choice1[4]="His shoe."

question[2]="When Sam goes shopping, what does Dean always remind him to get?"
choice2[1]="Pie"
choice2[2]="Ice cream"
choice2[3]="Coffee"
choice2[4]="Pizza"

question[3]="In LARP and the Real Girl, what is the name of the game?"
choice3[1]="Red Death"
choice3[2]="Moondoor"
choice3[3]="War Games"
choice3[4]="Quiddich"

question[4]="In the season 11 finale, who walks into a bar?"
choice4[1]="God"
choice4[2]="King of Hell"
choice4[3]="Sam Winchester"
choice4[4]="all of the above"

question[5]="In Dog Dean Afternoon, who or what did Dean get into an argument with, and pull a gun on, in a parking lot?"
choice5[1]="Clown"
choice5[2]="Changeling"
choice5[3]="Pigeon"
choice5[4]="Demon"

question[6]="What was the name of Sam's girlfriend in the pilot episode?"
choice6[1]="Amelia"
choice6[2]="Jennifer"
choice6[3]="Jessica"
choice6[4]="Cassie"

question[7]="What kind of monster killed Dean hundreds of times on the same day?"
choice7[1]="The Fates"
choice7[2]="The Trickster"
choice7[3]="An archangel"
choice7[4]="both b and c"

question[8]="In season 8, a strange man follows a blood sigil that transports him to Sam and Dean through a motel room closet. Who is he?"
choice8[1]="Chronos"
choice8[2]="their grandfather"
choice8[3]="Sam Winchester of a different time"
choice8[4]="the Archangel Michael"

question[9]="In the episode Yellow Fever, what creature made Dean scream irrationally?"
choice9[1]="Werewolf"
choice9[2]="Deer"
choice9[3]="Rat"
choice9[4]="Cat"

question[10]="In the episode Changing Channels, what was the revelation at the end of the episode regarding the Trickster?"
choice10[1]="He doesn't exist: it was a hallucination."
choice10[2]="Tricksters don't really have a sweet tooth."
choice10[3]="Tricksters are a race of Faery."
choice10[4]="He was the Archangel Gabriel in disguise."

solution[1]="d"
solution[2]="a"
solution[3]="b"
solution[4]="d"
solution[5]="c"
solution[6]="c"
solution[7]="b"
solution[8]="b"
solution[9]="d"
solution[10]="d"
