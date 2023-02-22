import React from "react";
import { View, Text,ImageBackground, StyleSheet,Image, TouchableOpacity } from "react-native";
import { Component } from "react/cjs/react.development";
import { LinearGradient } from "expo-linear-gradient";
import Background from "../Components/Background";
import { ScrollView } from "react-native-gesture-handler";

export default class Terms extends Component {

    settings=() => {
        this.props.navigation.navigate('Settings')
    }

    render() {
        return(
            <Background>
            <TouchableOpacity on onPress={this. settings}>
                  <Image 
                  style={style.close}
                  source={require("../../assets/Main/close.png")}/>
              </TouchableOpacity>

               <ImageBackground
                  style={style.topbuttondesign}
                  source={require("../../assets/Main/topbuttondesign.png")}>

                 <ImageBackground
                  style={style.heading}
                  source={require("../../assets/Main/yellowheading.png")}>
                      <Text style={{fontWeight:'700',fontSize:16, color:"#fff",marginTop:'4%',marginLeft:"8%", marginRight:"28%"}}>TERMS & CONDITIONS</Text>
                  </ImageBackground>
                  </ImageBackground>

                  <LinearGradient
                    colors={["#03548D", "#000B51"]}
                    style={style.contentbox}>

                  <Image 
                     style={{alignSelf:'center'}}
                     source={require("../../assets/Main/bluetopframe.png")}/>

                     <ScrollView>

                     <Text style={style.yellowheading}>Usage of Ludo Empire</Text>
                     <Text style={style.content}> Any person utilizing Ludo Empire or the Ludo Empire App 
("User") for availing the online gaming services offered there
in or participating in the various contests and games, being 
conducted on Ludo Empire shall be bound by these Terms 
and Conditions, and all other rules, regulations and terms of 
use referred to herein or provided by Ludo Empire in relation 
to any Ludo Empire Services.</Text>
                     
                     <Text style={style.content}>Ludo Empire shall be entitled to modify these Terms and 
Conditions, rules, regulations and terms of use referred to 
herein or provided by Ludo Empire in relation to any Ludo 
Empire Services at any time, by posting the same on Ludo 
Empire app or website. Use of Ludo Empire constitutes the 
User's acceptance of such Terms and Conditions, rules, 
regulations and terms of use referred to herein or provided 
by Ludo Empire in relation to any Ludo Empire Services, as 
may be amended from time to time. Ludo Empire may also 
notify the user of any change or modification in these Terms 
and Conditions, rules, regulations and terms of use referred 
to herein or provided by Ludo Empire, by way of sending an 
email to the User's registered email address or posting 
notifications in the User accounts. The User may then 
exercise the options provided in such an email or notification 
to indicate non-acceptance of the modified Terms and 
Conditions, rules, regulations and terms of use referred to 
here in or provided by Ludo Empire. If such options are not 
exercised by the User within the time frame prescribed in the 
email or notification, the User will be deemed to have 
accepted the modified Terms and Conditions, rules, 
regulations and terms of use referred to herein or provided 
by Ludo Empire.</Text>

                     <Text style={style.content}> Certain Ludo Empire Services being provided on Ludo 
Empire may be subject to additional rules and regulations set 
down in that respect. To the extent that these Terms and 
Conditions are inconsistent with the additional conditions set 
down, the additional conditions shall prevail.</Text>

                    <Text style={style.content}> 
Ludo Empire may, at its sole and absolute discretion:</Text>
 
                    <Text style={style.bulletpoint}>{'\u2B24'} 
Restrict, suspend, or terminate any User's access to all or</Text>
                   <Text style={style.bulletpoint}>{'\u2B24'} 
                   any part of Ludo Empire or Ludo Empire Services</Text>
                   <Text style={style.bulletpoint}>{'\u2B24'} 
                   Change, suspend, or discontinue all or any part of the </Text>
                   <Text style={style.bulletpoint}>{'\u2B24'} 
                   Ludo Empire Services</Text>
                   <Text style={style.bulletpoint}>{'\u2B24'} 
                   Reject, move, or remove any material that may be submitted by a User;</Text>
                   <Text style={style.bulletpoint}>{'\u2B24'} 
                   Move or remove any content that is available on Ludo Empire;</Text>
                   <Text style={style.bulletpoint}>{'\u2B24'} 
                   Deactivate or delete a user's account and all related information and files on the account;</Text>
                   <Text style={style.bulletpoint}>{'\u2B24'}
                   Establish general practices and limits concerning use of Ludo Empire;
                     </Text>

                     <Text style={style.content}>
                     In the event any User breaches, or Ludo Empire reasonably believes that such User has breached these Terms and Conditions, or has illegally or improperly used Ludo Empire or the Ludo Empire Services, Ludo Empire may, at its sole and absolute discretion, and without any notice to the User, restrict, suspend or terminate such User's access to all or any part of Ludo Empire or the Ludo Empire Services, deactivate or delete the User's account and all related information on the account, delete any content posted by the User on Ludo Empire and further, take technical and legal 
steps as it deems necessary. </Text>
 
                    <Text style={style.content}> If Ludo Empire charges its Users a platform fee in respect of 
any Ludo Empire Services, Ludo Empire shall, without delay, 
repay such platform fee in the event of suspension or 
removal or the User's account or Ludo Empire Services on 
account of any negligence or deficiency on the part of Ludo 
Empire, but not if such suspension or removal is affected 
due to:</Text>
                    <Text style={style.content}>
                    Any breach or inadequate performance by the User of any of 
these Terms and Conditions; or
                    </Text>

                    <Text style={style.content}>
                    Any circumstances beyond the reasonable control of Ludo 
Empire.
                    </Text>

                    
                    <Text style={style.content}>
                    Users consent to receiving communications such as 
announcements, administrative messages and 
advertisements from Ludo Empire or any of its partners, 
licensors or associates.
                    </Text>

                    <Text style={style.yellowheading}>How do I withdrawal cash</Text>

                     
                    <Text style={style.content}>
                    You can withdraw your winning amount only from the win 
wallet. When you will win more than 50rs. as a winning 
amount, you can transfer this amount through Paytm or 
bank transfer. For any financial transaction, have no worries 
because we follow secure payment gateways.
                    </Text>

                    <Text style={style.content}>
        
Ludo Empire includes a combination of content created by 
Ludo Empire, its partners, licensors, associates and/or Users. 
The intellectual property rights ("Intellectual Property 
Rights")in all software underlying Ludo Empire and the 
Ludo Empire Services and material published on Ludo 
Empire, including (but not limited to) games, Contests, 
software, advertisements, written content, photographs, 
graphics, images, illustrations, marks, logos, audio or video 
clippings and Flash animation, is owned by Ludo Empire, 
its partners, licensors and/or associates. Users may not 
modify, publish, transmit, participate in the transfer or 
sale of, reproduce, create derivative works of, distribute, 
publicly perform, publicly display, or in any way exploit any 
of the materials or content on Ludo Empire either in whole 
or in part without express written license from Ludo Empire.
                    </Text>

                    <Text style={style.content}>
                    Users may request permission to use any Ludo Empire 
content by writing in to Ludo Empire Help-desk.
                    </Text>

                    <Text style={style.content}>
                    Users may request permission to use any Ludo Empire 
content by writing in to Ludo Empire Help-desk.
                    </Text>

                    <Text style={style.content}>
                   
Users are solely responsible for all materials (whether 
publicly posted or privately transmitted) that they upload, 
post, e-mail, transmit, or otherwise make available on Ludo 
Empire ("Users' Content") Each User represents and warrants 
that he/she owns all Intellectual Property Rights in the User's 
Content and that no part of the User's Content infringes any 
third party rights. Users further confirm and undertake to not 
display or use of the names, logos, marks, labels, trademarks, 
copyrights or intellectual and proprietary rights of any third 
party on Ludo Empire. Users agree to indemnify and hold 
harmless Ludo Empire, its directors, employees, affiliates 
and assigns against all costs, damages, loss and harm 
including towards litigation costs and counsel fees, in 
respect of any third party claims that may be initiated 
including for infringement of Intellectual Property Rights 
arising out of such display or use of the names, logos, marks, 
labels, trademarks, copyrights or intellectual and proprietary 
rights on Ludo Empire, by such User or through the User's 
commissions or omissions.
                    </Text>

                    <Text style={style.content}>
                    Users hereby grant to Ludo Empire and its affiliates, partners, 
licensors and associates a worldwide, irrevocable, 
royalty-free, non-exclusive, sub-licensable license to use, 
reproduce, create derivative works of, distribute, publicly 
perform, publicly display, transfer, transmit, and/or publish 
Users' Content for any of the following purposes:
                    </Text>

                    <Text style={style.content}>
                    Displaying Users Content on Ludo Empire
Distributing Users Content, either electronically or via other media, to other Users seeking to download or 
otherwise acquire it, and/or
Storing Users Content in a remote database accessible 
by end users, for a charge.
This license shall apply to the distribution and the storage 
of Users Content in any form, medium, or technology.
                    </Text>

                    <Text style={style.content}>
                    All names, logos, marks, labels, trademarks, copyrights or 
intellectual and proprietary rights on Ludo Empire(s) 
belonging to any person (including User), entity or third 
party are recognized as proprietary to the respective owners 
and any claims, controversy or issues against these names, 
logos, marks, labels, trademarks, copyrights or intellectual 
and proprietary rights must be directly addressed to the 
respective parties under notice to Ludo Empire.
                    </Text>

                    
                    <Text style={style.content}>
                    
Third Party Sites, Services and Products
Ludo Empire may contain links to other Internet sites owned 
and operated by third parties. Users' use of each of those 
sites is subject to the conditions, if any, posted by the sites. 
Ludo Empire does not exercise control over any Internet sites 
apart from Ludo Empire, and cannot be held responsible for 
any content residing in any third party Internet site. Ludo 
Empire's inclusion of third-party content or links to 
third-party Internet sites is not an endorsement by Ludo 
Empire of such third-party Internet sites.
                    </Text>

                    <Text style={style.content}>
                   
Users' correspondence, transactions or related activities 
with third parties, including payment providers and 
verification service providers, are solely between the User 
and that third party. Users' correspondence, transactions and 
usage of the services of such third party shall be subject to 
the terms and conditions, policies and other service terms 
adopted/implemented by such third party, and the User shall 
be solely responsible for reviewing the same prior to 
transacting or availing of the services of such third party. 
User agrees that Ludo Empire will not be responsible or liable 
for any loss or damage of any sort incurred as a result of any 
such transactions with third parties. Any questions, 
complaints, or claims related to any third-party product or 
service should be directed to the appropriate vendor.
                                        </Text>

                    <Text style={style.content}>
                                        Ludo Empire contains content that is created by Ludo Empire 
as well as content provided by third parties. Ludo Empire 
does not guarantee the accuracy, integrity, quality of the 
content provided by third parties and such content may not 
relied upon by the Users in utilizing the Ludo Empire Services 
provided on Ludo Empire including while participating in any 
of the contests hosted on Ludo Empire.
                                                           </Text>

                   <Text style={style.yellowheading}>Privacy Policy</Text>

                   
                   <Text style={style.content}>
                   All information collected from Users, such as registration 
and credit card information, is subject to Ludo Empire's 
Privacy Policy which is available at Privacy Policy.
                    </Text>

                    <Text style={style.yellowheading}>User Conduct</Text>

                    <Text style={style.content}>
                    Users agree to abide by these Terms and Conditions and all 
other rules, regulations and terms of use of the Website. In 
the event User does not abide by these Terms and Conditions 
and all other rules, regulations and terms of use, Ludo 
Empire may, at its sole and absolute discretion, take 
necessary remedial action, including but not limited to: 
derestricting, suspending, or terminating any User's access 
to all or any part of Ludo Empire Services;
                    </Text>

                    <Text style={style.content}>
                    Deactivating or deleting a user's account and all related 
information and files on the account. Any amount remaining 
unused in the User's Game account or Winnings Account on 
the date of deactivation or deletion shall be transferred to the 
User's bank account on record with Ludo Empire subject to a 
processing fee (if any) applicable on such transfers as set 
out herein; or refraining from awarding any prize(s) to such 
User.
                    </Text>

                    <Text style={style.content}>
                    Users agree to provide true, accurate, current and complete 
information at the time of registration and at all other times 
(as required by Ludo Empire). Users further agree to update 
and keep updated their registration information.
                    </Text>

                    <Text style={style.content}>
                    A User shall register or operate more than one User account 
with Ludo Empire.
                    </Text>

                    
                    <Text style={style.content}>
                    Users agree to ensure that they can receive all 
communication from Ludo Empire by marking emails from 
Ludo Empire as part of their "safe senders" list. Ludo Empire 
shall not be held liable if any email remains unread by a User 
as a result of such e-mail getting delivered to the User's junk 
or spam folder.
                    </Text>

                    <Text style={style.content}>
                    Any password issued by Ludo Empire to a User may not be 
revealed to anyone else. Users may not use anyone else's 
password. Users are responsible for maintaining the 
confidentiality of their accounts and passwords. Users agree 
to immediately notify Ludo Empire of any unauthorized use 
of their passwords or accounts or any other breach of 
security.
                    </Text>
               
                    <Text style={style.content}>
                    Users agree to exit/log-out of their accounts at the end of 
each session. Ludo Empire shall not be responsible for any 
loss or damage that may result if the User fails to comply 
with these requirements.
                    </Text>

                    <Text style={style.content}>
                    Users agree not to use cheats, exploits, automation, software, 
bots, hacks or any unauthorized third-party software 
designed to modify or interfere with Ludo Empire Services 
and/or Ludo Empire experience or assist in such activity.
                    </Text>

                    <Text style={style.content}>
                    Users agree not to copy, modify, rent, lease, loan, sell, assign, 
distribute, reverse engineer, grant a security interest in, or 
otherwise transfer any right to the technology or software 
underlying Ludo Empire or Ludo Empire Services.
                    </Text>

                    <Text style={style.content}>
                    Users agree that without Ludo Empire's express written 
consent, they shall not modify or cause to be modified any 
files or software that are part of Ludo Empire's Services.
Users agree not to disrupt, overburden, or aid or assist in the 
disruption or overburdening of (a) any computer or server 
used to offer or support Ludo Empire or the Ludo Empire 
Services (each a "Server"); or (2) the enjoyment of Ludo 
Empire Services by any other User or person.
                    </Text>

                    <Text style={style.content}>
               
Users agree not to institute, assist or become involved in any 
type of attack, including without limitation to distribution of a 
virus, denial of service, or other attempts to disrupt Ludo 
Empire Services or any other person's use or enjoyment of 
Ludo Empire Services.
                    </Text>

                    <Text style={style.content}>
                    Users shall not attempt to gain unauthorized access to the 
User accounts, Servers or networks connected to Ludo 
Empire Services by any means other than the User interface 
provided by Ludo Empire, including but not limited to, by 
circumventing or modifying, attempting to circumvent or 
modify, or encouraging or assisting any other person to 
circumvent or modify, any security, technology, device, or 
software that underlies or is part of Ludo Empire Services.
                    </Text>

                    <Text style={style.content}>
                
Without limiting the foregoing, Users agree not to use Ludo 
Empire for any of the following:
                    </Text>

                    <Text style={style.contentwithoutspace}>
               
To engage in any obscene, offensive, indecent, racial, communal, anti-national, objectionable, defamatory or 
abusive action or communication;
To harass, stalk, threaten, or otherwise violate any legal 
rights of other individuals;
To publish, post, upload, e-mail, distribute, or disseminate 
(collectively, "Transmit") any inappropriate, profane, 
defamatory, infringing, obscene, indecent, or unlawful 
content;
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    To Transmit files that contain viruses, corrupted files, or 
any other similar software or programs that may damage 
or adversely affect the operation of another person's 
computer, Ludo Empire, any software, hardware, or 
telecommunications equipment;
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    To advertise, offer or sell any goods or services for any 
commercial purpose on Ludo Empire without the express 
written consent of Ludo Empire;
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    To Transmit content regarding services, products, 
surveys, contests, pyramid schemes, spam, unsolicited 
advertising or promotional materials, or chain letters;
To advertise, offer or sell any goods or services for any 
commercial purpose on Ludo Empire without the express 
written consent of Ludo Empire;
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    To download any file, recompile or disassemble or 
otherwise affect our products that you know or 
reasonably should know cannot be legally obtained in 
such manner;;
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    To falsify or delete any author attributions, legal or other 
proper notices or proprietary designations or labels of the 
origin or the source of software or other material;
To restrict or inhibit any other user from using and 
enjoying any public area within our sites;
To collect or store personal information about other Users;
To interfere with or disrupt Ludo Empire, servers, or 
networks;
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    To impersonate any person or entity, including, but not 
limited to, a representative of Ludo Empire, or falsely 
state or otherwise misrepresent User's affiliation with a 
person or entity;
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    To forge headers or manipulate identifiers or other data 
in order to disguise the origin of any content transmitted 
through Ludo Empire or to manipulate User's presence on 
Ludo Empire(s);
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    To take any action that imposes an unreasonably or 
disproportionately large load on our infrastructure;
To engage in any illegal activities. You agree to use our 
bulletin board services, chat areas, news groups, forums, 
communities and/or message or communication 
facilities (collectively, the "Forums") only to send and 
receive messages and material that are proper and 
related to that particular Forum.
                    </Text>


                    <Text style={style.contentwithoutspace}>
                    If a User chooses a username that, in Ludo Empire's 
considered opinion is obscene, indecent, abusive or that 
might subject Ludo Empire to public disparagement or scorn, 
Ludo Empire reserves the right, without prior notice to the 
User, to change such username and intimate the User or 
delete such username and posts from Ludo Empire, deny 
such User access to Ludo Empire, or any combination of 
these options.
                    </Text>
                    <Text style={style.contentwithoutspace}>
                    Unauthorized access to the Ludo Empire is a breach of these 
Terms and Conditions, and a violation of the law. Users agree 
not to access Ludo Empire by any means other than through 
the interface that is provided by Ludo Empire for use in 
accessing Ludo Empire. Users agree not to use any 
automated means, including, without limitation, agents, 
robots, scripts, or spiders, to access, monitor, or copy any 
part of our sites, except those automated means that we 
have approved in advance and in writing.
                    </Text> 
                    <Text style={style.contentwithoutspace}>
                    Use of Ludo Empire is subject to existing laws and legal 
processes. Nothing contained in these Terms and Conditions 
shall limit Ludo Empire's right to comply with governmental, 
court, and law-enforcement requests or requirements 
relating to Users' use of Ludo Empire.
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    Users may contact Ludo Empire Help-desk with problems or 
questions, as appropriate.
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    Persons below the age of eighteen (18) years are not 
allowed to make any purchases or redemption on Ludo 
Empire & consequent participation in any activity on Ludo 
Empire Website or application is not permitted and such 
person is subject to disqualification at the sole and absolute 
discretion of Ludo Empire, whenever it comes to the 
knowledge of Ludo Empire.
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    Ludo Empire believes that parents should supervise their 
children's online activities and consider using parental 
control tools available from online services and software 
manufacturers that help provide a child- friendly online 
environment. These tools can also prevent children from 
disclosing online their name, address and other personal 
information without parental permission.
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    Although persons below the age of 18 years are allowed to 
use certain Ludo Empire Services on the Ludo Empire & it is 
limited to play only on practice mode.
Ludo Empire may not be held responsible for any content 
contributed by Users on the Ludo Empire.
Registration
                    </Text>

                    
                    <Text style={style.contentwithoutspace}>
                    In order to register for the Contest(s), Participants may 
require to accurately provide the following information:
                    </Text>

                    <Text style={style.bulletpoint}>{'\u2B24'}
                    Name or User Name
                    </Text>

                    <Text style={style.bulletpoint}>{'\u2B24'}
                    E-mail address
                    </Text>

                    <Text style={style.bulletpoint}>{'\u2B24'}
                    Mobile Number
                    </Text>

                    <Text style={style.bulletpoint}>{'\u2B24'}
                    Password
                    </Text>

                       
                    <Text style={style.contentwithoutspace}>
                    For getting any winning amount, participant may require to 
share his /her bank account details correctly
Ludo Empire is not liable for any transaction, if details 
provided by the user are incorrect.
                    </Text>

                       
                    <Text style={style.contentwithoutspace}>
                    A participant will receive his/ her winnings in his bank 
account within 24-48 hrs of submitting a redeem request.
If there is any delay in receiving the winning amount, a 
participant can directly contact Ludo Empire Help-desk.
Participants may also be required to confirm that they have 
read, and shall abide by, these Terms and Conditions.
In the event a Participant indicates, while entering an 
address, that he/she is a resident of either Assam, Nagaland, 
Odisha, Sikkim, Telangana or Andhra Pradesh such 
Participant will not be permitted to proceed to sign up for 
any round in the paid version of the Contest as described 
below.
                    </Text>

                       
                    <Text style={style.contentwithoutspace}>
                    Contest(s), Participation and Prizes
Ludo Empire offers a platform where one can purchase coins 
on Ludo Empire through Credit card, Net Banking, Debit card, 
UPI or Paytm wallet. Through purchased coins a participant 
can challenge his / her friend or any random online player & 
can play a game against any opponent by selecting a proper 
playing table.
                    </Text>

                       
                    <Text style={style.contentwithoutspace}>
                    Any player who loses the game, will get its coins deducted at 
the very instant of losing the game equivalent to the playing 
table amount & the player who wins the game will get the 
winning coins in his Ludo Empire wallet
For every winning, Ludo Empire will deduct 20% of the 
winning coins as a Platform fee & GST Taxations
Winning coins would be immediately reflected in the winners 
Ludo Empire Wallet after deduction of Ludo Empire 
platform fee.
                    </Text>

                       
                    <Text style={style.contentwithoutspace}>
                    A participant can redeem his/ her coins into the bank 
account or in Paytm wallet by submitting a redeem request 
& by providing correct bank or Paytm details.
A participant can redeem coins from his / her Ludo Empire 
wallet if & only if participant's Ludo Empire Win wallet has a 
minimum of 50 coins.
                    </Text>

                       
                    <Text style={style.contentwithoutspace}>
                    Ludo Empire shall not charge any processing fee for the 
online transfer of winning amount from user's wallet to the 
User's bank account or paytm on record with Ludo Empire. 
Users are requested to note that they will be required to 
provide correct bank details accordingly.
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    Any player who exits the game in between or not play on his 
turn for thrice would be considered a loser & coins would be 
deducted from his account & credited to winner's wallet.
Ludo Empire is not liable for any network connectivity issue 
faced by user.
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    Ludo Empire will give users 120 seconds (2 minutes) of 
airtime to resettle its connectivity & completion of the game.
Only a participant can use his/her coins in 1 on 1 mode & 
Friends mode. Coins would be unused in practice mode.
Legality of Game of Skill
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    Games of skill are legal, as they are excluded from the ambit 
of Indian gambling legislation including, the Public Gambling 
Act of 1867. The Indian Supreme Court in the cases of State 
of Andhra Pradesh, V.K Satyanarayana (AIR 1968 SC 825) 
and K.R Lakshmanan. State of Tamil Nadu 
(AIR 1996 SC 1153) has held that a game in which success 
depends predominantly upon the superior knowledge, 
training, attention, experience and adroitness of the player 
shall be classified as a game of skill.
                    </Text>


                    <Text style={style.contentwithoutspace}>
                    The contest described above is prominently a game of skill, 
once you get that number how you play involves a strategy, 
planning & skill. Do you move the same token over and over 
again until it reaches the end? Or do you move different 
tokens at different times to ensure that they stay safe and 
away from the opponent's tokens? Or do you use your token 
to kill the opponent's tokens? How to manage your tokens on 
the safe points (stars) to let it unaffected by opponent's token
                    </Text>

                    <Text style={style.content}>
            
Ludo is a game where a lot of concentration, planning, 
strategy to understand the opponent's planning is required to 
win a game.
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    A player with good experience & understanding of ludo skills 
with best of strategy building skills along with excellent 
presence of mind can dominate.
Ludo Empire therefore offers a practice mode to let all 
players play & test their skills before joining any paid mode,
Ludo Empire highly recommends that if a player is 
inexperienced or not good with ludo skills then he/ she 
should spend lot of time playing on practice mode to 
enhance his /her skills as skills are really required to 
correctly strategize the moves after getting a number on roll 
of dice
                    </Text>

                    <Text style={style.contentwithoutspace}>
                    So a participant should have a high level of skill & need to 
have a good strategy in order to successfully win at Ludo.
By participating in this Contest(s), each Participant 
acknowledges and agrees that he/she is participating in a 
game of skill.
                    </Text>

                    <Text style={style.yellowheading}>Eligibility</Text>

                    
                    <Text style={style.contentwithoutspace}>
                    The Contest(s) are open only to persons above the age of 
18 years.
                    </Text>

                    
                    <Text style={style.content}>
                  
The Contest(s) are open only to persons currently residing in 
India.
                    </Text>

                    
                    <Text style={style.content}>
                    Ludo Empire may, in accordance with the laws prevailing in 
certain Indian states, bar individuals residing in those states 
from participating in the Contest(s). Currently, individuals 
residing in the Indian states of Assam, Odisha or Telangana 
may not participate in the paid version of the Contest as the 
laws of these states bar persons from participating in games 
of skill where participants are required to pay to enter.     </Text>

                    
                    <Text style={style.content}>
                    Persons who wish to participate must have a valid email 
address.
                    </Text>


                    
                    <Text style={style.content}>
                    Only those Participants who have successfully registered on 
the Ludo Empire as well as registered prior to each round in 
accordance with the procedure outlined above shall be 
eligible to participate in the Contest and winnings.
                    </Text>


                    
                    <Text style={style.content}>
                    Payable All prizes shall be subject to deduction of tax ("TDS") 
as per the Income Tax Act 1961. Winners will be provided 
TDS certificates in respect of such tax deductions. The 
Winners shall be responsible for payment of any other 
applicable tax, including but not limited to, income tax, 
gift tax, etc. in respect of the prize.
                    </Text>


                    
                    <Text style={style.content}>
               
Miscellaneous The decision of Ludo Empire with respect to 
the awarding of prizes shall be final, binding and non- 
contestable. Participants playing the paid formats of the 
Contest(s) confirm that they are not residents of any of the 
following Indian states - Assam, Odisha or Telangana. If it is 
found that a Participant playing the paid formats of the 
Contest(s) is a resident of any of the above mentioned states, 
Ludo Empire shall disqualify such Participant and forfeit any 
prize won by such Participant. Further Ludo Empire may, at 
its sole and absolute discretion, suspend or terminate such 
Participant's account with Ludo Empire. Any amount 
remaining unused in the User's Game Account or Winnings 
Account on the date of deactivation or deletion shall be 
reimbursed to the User by an online transfer to the User's 
bank account on record with Ludo Empire, subject to the 
processing fee (if any) applicable on such transfers as set 
out herein. If it is found that a Participant playing the paid 
formats of the Contest(s) is under the age of eighteen (18), 
Ludo Empire shall be entitled, at its sole and absolute 
discretion, to disqualify such Participant and forfeit his/her 
prize. Further, Ludo Empire may, at its sole and absolute 
discretion, suspend or terminate such Participant. All prizes 
are non-transferable and non-refundable. Prizes cannot be 
exchanged / redeemed for cash or kind. No cash claims can 
be made in lieu of prizes in kind.     </Text>



                 <Text style={style.content}> General Conditions</Text>

                    
                    <Text style={style.contentwithoutspace}>
                    If it comes to the notice of Ludo Empire that any 
governmental, statutory or regulatory compliances or 
approvals are required for conducting any Contest(s) or if it 
comes to the notice of Ludo Empire that conduct of any such 
Contest(s) is prohibited, then Ludo Empire shall withdraw 
and / or cancel such Contest(s) without prior notice to any 
Participants or winners of any Contest(s). Users agree not to 
make any claim in respect of such cancellation or withdrawal 
of the Contest, or contest it in any manner.
                    </Text>

                    
                 <Text style={style.content}> Release and Limitations of Liability</Text>


                    
                    <Text style={style.contentwithoutspace}>
                    Users shall access the Ludo Empire Services provided on 
Ludo Empire voluntarily and at their own risk. Ludo Empire 
shall, under no circumstances be held responsible or liable 
on account of any loss or damage sustained (including but 
not limited to any accident, injury, death, loss of property) by 
Users or any other person or entity during the course of 
access to the Ludo Empire Services (including participation 
in the Contest(s)) or as a result of acceptance of any prize.
                    </Text>

                    
                    <Text style={style.content}>
                    By entering the Ludo Empire and accessing the Ludo Empire 
Services provided therein, Users hereby release from and 
agree to indemnify Ludo Empire, and/ or any of its directors, 
employees, partners, associates and licensors, from and 
against all liability, cost, loss or expense arising out their 
access to the Ludo Empire Services including 
(but not limited to) personal injury and damage to property 
and whether direct, indirect, consequential, foreseeable, due 
to some negligent act or omission on their part, or otherwise.
                    </Text>

                    
                    <Text style={style.content}>
                    Ludo Empire accepts no liability, whether jointly or severally, 
for any errors or omissions, whether on behalf of itself or 
third parties
                    </Text>


                    
                    <Text style={style.content}>
                    Users shall be solely responsible for any consequences 
which may arise due to their access of Ludo Empire Services 
by conducting an illegal act or due to non-conformity with 
these Terms and Conditions and other rules and regulations 
in relation to Ludo Empire Services, including provision of 
incorrect address or other personal details. Users also 
undertake to indemnify Ludo Empire and their respective 
officers, directors, employees and agents on the happening 
of such an event (including without limitation cost of attorney, 
legal charges etc.) on full indemnity basis for any 
loss/damage suffered by Ludo Empire on account of such 
act on the part of the Users.
                    </Text>


                    
                    <Text style={style.content}>
                    Users shall indemnify, defend, and hold Ludo Empire 
harmless from any third party/entity/organization claims 
arising from or related to such User's engagement with the 
Ludo Empire or participation in any Contest. In no event shall
Ludo Empire be liable to any User for acts or omissions 
arising out of or related to User's engagement with the Ludo 
Empire or his/her participation in any Contest(s).
                    </Text>

                    <Text style={style.content}>
             
In consideration of Ludo Empire allowing Users to access the 
Ludo Empire Services hosted on the Ludo Empire, to the 
maximum extent permitted by law, the Users waive and 
release each and every right or claim, all actions, causes of 
actions (present or future) each of them has or may have 
against Ludo Empire, its respective agents, directors, 
officers, business associates, group companies, sponsors, 
employees, or representatives for all and any injuries, 
accidents, or mishaps (whether known or unknown) or 
(whether anticipated or unanticipated) arising out of the 
provision of Ludo Empire Services or related to the Contests 
or the prizes of the Contests.
                    </Text>

                    <Text style={style.yellowheading}> Disclaimers</Text>

                    <Text style={style.contentwithoutspace}>
                    To the extent permitted under law, neither Ludo Empire nor 
its parent/holding company, subsidiaries, affiliates, directors, 
officers, professional advisors, employees shall be 
responsible for the deletion, the failure to store, the 
miss-delivery, or the untimely delivery of any information or 
material.
                    </Text>

                    <Text style={style.content}>
                
To the extent permitted under law, Ludo Empire shall not be 
responsible for any harm resulting from downloading or 
accessing any information or material, the quality of servers, 
games, products, Ludo Empire services or sites, cancellation 
of competition and prizes. Ludo Empire disclaims any 
responsibility for, and if a User pays for access to one of 
Ludo Empire's Services the User will not be entitled to a 
refund as a result of, any inaccessibility that is caused by 
Ludo Empire's maintenance on the servers or the technology 
that underlies our sites, failures of Ludo Empire's service 
providers (including telecommunications, hosting, and 
power providers), computer viruses, natural disasters or 
other destruction or damage of our facilities, acts of nature, 
war, civil disturbance, or any other cause beyond our 
reasonable control. In addition, Ludo Empire does not 
provide any warranty as to the content on the Ludo Empire(s). 
Ludo Empire(s) content is distributed on an "as is, as 
available" basis.
                    </Text>

                    <Text style={style.content}>
                    Any material accessed, downloaded or otherwise obtained 
through Ludo Empire is done at the User's discretion, 
competence, acceptance and risk, and the User will be solely 
responsible for any potential damage to User's computer 
system or loss of data that results from a user's download of 
any such material.
                    </Text>

                    <Text style={style.content}>
                    Ludo Empire shall make best endeavours to ensure that the 
Ludo Empire(s) is error-free and secure, however, neither 
Ludo Empire nor any of its partners, licensors or associates 
makes any warranty that:
                    </Text>


                    <Text style={style.content}>
                    The Ludo Empire(s) will meet Users' requirements,
Ludo Empire(s) will be uninterrupted, timely, secure, or 
Error free
                    </Text>

                    
                    <Text style={style.content}>
                    The results that may be obtained from the use of Ludo 
Empire(s) will be accurate or reliable; and
The quality of any products, Ludo Empire Services, 
information, or other material that Users purchase or 
obtain through Ludo Empire(s) will meet Users expectations.
                    </Text>

                    
                    <Text style={style.contentwithoutspace}>
                    In case Ludo Empire discovers any error, including any error 
in the determination of Winners or in the transfer of amounts 
to a User's account, Ludo Empire reserves the right 
(exercisable at its discretion) to rectify the error in such 
manner as it deems fit, including through a set-off of the 
erroneous payment from amounts due to the User or 
deduction from the User's account of the amount of 
erroneous payment. In case of exercise of remedies in 
accordance with this clause, Ludo Empire agrees to notify 
the User of the error and of the exercise of the remedy(ies) 
to rectify the same.
                    </Text>

                    
                    <Text style={style.content}>
                    To the extent permitted under law, neither Ludo Empire nor 
its partners, licensors or associates shall be liable for any 
direct, indirect, incidental, special, or consequential damages 
arising out of the use of or inability to use our sites, even if 
we have been advised of the possibility of such damages.
                    </Text>

                    
                    <Text style={style.content}>
                    Any Ludo Empire Services, events or Contest(s) being hosted 
or provided, or intended to be hosted or provided by Ludo 
Empire and requiring specific permission or authority from 
any statutory authority or any state or the central government, 
or the board of directors shall be deemed cancelled or 
terminated, if such permission or authority is either not 
obtained or denied either before or after the availability of 
the relevant Ludo Empire Services, events or Contest(s) are 
hosted or provided.
                    </Text>

                    
                    <Text style={style.content}>
                    To the extent permitted under law, in the event of suspension 
or closure of any Services, events or Contests, Users 
(including Participants) shall not be entitled to make any 
demands, claims, on any nature whatsoever.
                    </Text>

                    <Text style={style.yellowheading}>
Taxes Payable</Text>

                    
                    <Text style={style.contentwithoutspace}>
                    Taxes Payable All prizes shall be subject to deduction of tax 
("TDS") as per the Income Tax Act 1961. As of April 1, 2018, 
the TDS rate prescribed by the Government of India with 
respect to any prize money amount that is in excess of Rs. 
10,000/- is 31.2% of the total prize money amount. In case of 
any revisions by the Government of India to the 
aforementioned rate in the future, TDS will be deducted by 
Ludo Empire in accordance with the then current prescribed 
TDS rate. The Winners shall be responsible for payment of 
any other applicable tax, including but not limited to, income 
tax, gift tax, etc. in respect of the prize money
                    </Text>

                    <Text style={style.yellowheading}> Cancellation Policy</Text>

                    <Text style={style.contentwithoutspace}>
                    Ludo Empire's focus is 100% customer satisfaction. In the 
event of an error in the transaction, wrongful transfers, 
mistaken identity, or any other issues that can be verified 
and proven, we will refund the money in question to the user, 
provided the reasons are genuine and proved after 
investigation. Please read the fine print on each league, 
contest, tournament or service we provide before paying for 
it, it provides all the details about the services we provide 
and the contest entries users purchase. In case of 
dissatisfaction from Ludo Empire's services, clients have the 
liberty to cancel their projects and request a refund from us. 
Our Policy for the cancellation and refund will be as follows.
                    </Text>

                    <Text style={style.content}>
                    For cancellations on transactions already completed please 
contact us via the Contact Us section on the app or 
the website.

                    </Text>

                    <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"3%", marginLeft:"3%", textAlign:'justify', marginRight:"3%"}}>
                    Email: email
                    </Text>

                    <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"3%", marginLeft:"3%", textAlign:'justify', marginRight:"3%"}}>
                    Phone No: 020-67320405
                    </Text>

                    <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"3%", marginBottom:"10%", marginLeft:"3%", textAlign:'justify', marginRight:"3%"}}>
                Address: #15A, 4th Floor, City Vista, Tower A, Fountain Road, 
Kharadi, Pune, MH - 411014 IN.
                    </Text>

                     </ScrollView>

                     </LinearGradient>
                     </Background>
        );
    }
}


const style=StyleSheet.create({
    close:{
        marginLeft:"90%",
        marginTop:"5%"
     },
     topbuttondesign:{
        height:"29.5%",
        width:"80%", 
        alignSelf:'center',
        marginLeft:"18%",
        
     },
     heading:{
        height:"44.5%",
        width:"79%", 
        marginTop:"6%",
        marginLeft:"8.8%",
        marginRight:"5%"
     },
     contentbox:{
        height:"79%",
        width:"80%",
        marginTop:"-34.5%",
        alignSelf:'center',
  
        borderRadius:10,
        borderWidth:0.8,
        borderColor:"#00C4FF"
     },
     yellowheading:{
        color:"#EDA310",
        marginLeft:"3%", 
        fontSize:10, 
        fontWeight:'500', 
        marginTop:"3%"
     },
     content:{
        color:"#fff", 
        fontWeight:'400', 
        fontSize:10, 
        marginTop:"1%",
        marginLeft:"3%",
        textAlign:'justify', 
        marginRight:"3%"
     },
     bulletpoint:{
        color:"#fff", 
        fontWeight:'400', 
        fontSize:10, 
        marginTop:"3%",
        marginLeft:"5%",
        textAlign:'justify', 
        marginRight:"3%"
     },
     contentwithoutspace:{
        color:"#fff", 
        fontWeight:'400', 
        fontSize:10, 
        marginLeft:"3%",
        textAlign:'justify', 
        marginRight:"3%"
     }
})