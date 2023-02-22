import React from "react";
import { View, Text,ImageBackground, StyleSheet,Image,ScrollView, TouchableOpacity } from "react-native";
import { Component } from "react/cjs/react.development";
import { LinearGradient } from "expo-linear-gradient";
import Background from "../Components/Background";

export default class Privacy extends Component {

    
    settings = () => {
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
                        <Text style={{fontWeight:'700',fontSize:16, color:"#fff",marginTop:'4%',marginLeft:"12%", marginRight:"12%"}}>PRIVACY & POLICY</Text>
                    </ImageBackground>
                    </ImageBackground>

                    <LinearGradient
                      colors={["#03548D", "#000B51"]}
                      style={style.contentbox}>

                    <Image 
                       style={{alignSelf:'center'}}
                       source={require("../../assets/Main/bluetopframe.png")}/>
                       
                       <ScrollView>
                       <Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500'}}>QUICK OVERVIEW</Text>
                       <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>www.ludoempire.com ("Website") is owned and operated by Fabzen Technologies Private Limited ("Fabzen," "we" or "us"). The policies that are mentioned below are applicable to this Website. www.ludoempire.com Please be advised that this Privacy Policy applies solely to the information gathered at our website and this policy does not apply to any information supplied to other websites whether is or not affiliated with us. By visiting our website you accept this Privacy Policy, and further you ensure that you are at least 18 or above, and authorised to play Ludo Empire as per the Legal mandates of India. If you disagree with the terms of this Privacy Policy, please do not use the Website any further.</Text>
                      
                       <Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500', marginTop:"3%"}}>GENERAL STATEMENT</Text>
                       <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
                       Fabzen is committed to protecting the privacy of its users in 
all aspects. With a goal to offer the best internet experience 
to its Users which is both fun and secure. Kindly take a few 
minutes to read the 'About Us' section to know more. Few of 
our services are offered for free, though you may need prior 
registration to participate in the games we offer. The 
information about the User is collected by Fabzen from the 
information only supplied by Users.

                       </Text>
                       <Text style={{color:"#fff", fontWeight:'400', fontSize:12, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
                       Before submitting any information to the Portal, kindly read 
the following Privacy Policy for a detailed explanation of how 
your personal information shall be treated by us. By utilizing 
the Portal, you give your implied consent towards the use, 
collection, disclosure, and transfer of your personal 
information solely for the purposes outlined in this Privacy 
Policy and for the collection, processing, and maintenance 
of such information. If any part of this privacy policy is not 
acceptable to you, we request you to not use the Portal.
                        </Text>

                        <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
                        When you use any part of the Portal, it indicates your implied 
acceptance of this Privacy Policy as well as your consent for 
us to collect, use and disclose your personal information in 
accordance with the provisions of this Privacy Policy. 
While you are not obligated to provide us with your personal 
information and may withdraw your consent for us to collect 
your personal information, kindly note that in any such event, 
you will be unable to utilize the vast scope of facilities and 
services offered to you by us.
                        </Text>

                        <Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500', marginTop:"3%"}}>COLLECTION OF INFORMATION</Text>
                        <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
                        We collect information, voluntarily submitted by our Users to 
the Website in order to assist us in responding to various 
requests from the respective Users. We are dedicated to 
protecting the privacy of all Users of our website, except as 
disclosed below. We do not sell, barter, give away, rent, or 
permit a third party to use your personal information.
</Text> 


               <Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500', marginTop:"3%"}}>USE OF PERSONAL DATA</Text>
               <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
               To make use of the vast array of Facilities and services 
offered on the Portal, Users shall be required to provide 
certain personal information to complete the registration 
process. These include:
                </Text>
                <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"3%",marginLeft:"5%",textAlign:'justify', marginRight:"3%"}}>{'\u2B24'} Location</Text>
                <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"5%",textAlign:'justify', marginRight:"3%"}}>{'\u2B24'} Username</Text>
                <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"5%",textAlign:'justify', marginRight:"3%"}}>{'\u2B24'} Password</Text>
                <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"5%",textAlign:'justify', marginRight:"3%"}}>{'\u2B24'} Email address</Text>
                <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"5%",textAlign:'justify', marginRight:"3%"}}>{'\u2B24'} Phone Number</Text>

                <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
                In addition to the above information, in the process of 
providing you with access to the Services, and the features 
offered through the Portal and to verify your identity, you 
may be required to furnish additional information, 
including your:</Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"3%",marginLeft:"5%",textAlign:'justify', marginRight:"3%"}}>{'\u2B24'} Permnent Account Number</Text>
<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"5%",textAlign:'justify', marginRight:"3%"}}>{'\u2B24'} Aadhar Card Number</Text>


<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>Fabzen Technologies Private Limited shall not collect any 
information or contact any given number directly for 
personal use. The purpose behind collecting this information 
from the users is to ensure the secure transfer of funds from 
their banks to the in-game wallet and vice versa. Any 
information you provide will not be used for other 
commercial purposes and will not be forwarded to any third 
party for their usage. </Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
Further details such as your Bank Account Number may be 
collected to verify your payments. This is required before 
users can be granted permission to use the App to its full 
extent and are given complete access to all the services 
provided.</Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
All the information that is required is specific and is related 
to the kind of services the user wishes to avail or access, 
and such information shall be used solely to provide 
services, including but not limited to the App and its features 
which are requested by the User. The details provided by the 
Users allow us to improve the App and bring you a fun, 
secure and user-friendly gaming experience. The App is 
permitted to share any such information provided with its 
affiliates and other third parties under certain conditions. 
This is done with the view of complying with legal 
regulations and guidelines which facilitates a secure 
network, further ensuring the prevention of fraud or other 
imminent harm. </Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}> 
We may use third parties, subsidiaries, affiliates, and 
business partners to perform functions such as transactions, 
marketing, advertising, re-marketing, etc., on our behalf. 
These entities may be provided limited or full access to the 
User's personal information which is needed to perform their 
functions and are under a legal obligation in terms of our 
respective contracts with them, to maintain the 
confidentiality and security of any personal information 
collected from this Website. They are restricted from using, 
selling, distributing, or altering this data in any way other 
than to provide the requested services to the Website.
</Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}> 

We may also use or disclose our User's personal information
 if required/obligated to do so by law or to assist in law 
enforcement if that is necessary: 
</Text>

      <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"3%",marginLeft:"5%",textAlign:'justify', marginRight:"3%"}}>{'\u2B24'} To conform with the law or comply with legal process served on us or the Website;</Text>
      <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"3%",marginLeft:"5%",textAlign:'justify', marginRight:"3%"}}>{'\u2B24'} To protect and defend our rights or property, the Website, or our Users; and</Text>
      <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"3%",marginLeft:"5%",textAlign:'justify', marginRight:"3%"}}>{'\u2B24'}To urgently act under circumstances to protect our safety and that of our affiliates, agents and the users of the Website or the public in general. </Text>

      <Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500', marginTop:"3%"}}>USE OF COOKIES</Text>
      <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}> Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (only if you allow) that enable the sites or service 
provider systems to recognize your browser to capture and 
remember certain information. We use cookies to 
understand and save your preferences for future visits and 
compile aggregate data about site traffic and site interaction 
so that we can offer a better site experience in the future.
</Text> 

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>

Certain information that you provide on the Website may be 
a part of publicly accessible portions of the Website such as 
message boards, comments, or feedback sections. This 
Privacy Policy does not apply to any information you choose 
to make public by posting it on any such parts of the Website. 
Please be careful about what information you choose to 
disclose on the publicly accessible portions of the Website.
    </Text>

    <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
    To improve the effectiveness and usability of the Portal for 
our Users, we use "cookies", or similar electronic tools to 
collect information to assign each visitor a unique random 
number as a User Identification (User ID) to understand the 
User's interests using the identified computer. Unless the 
User voluntarily identifies himself/herself (e.g., through 
registration), Ludo Empire has no way of knowing who the 
User is, even if we assign a cookie to the User's computer. 
The only personal information a cookie can contain is 
information supplied by the User. A cookie cannot read data 
off the User's hard drive. Ludo Empire's advertisers may also 
assign their cookies to the User's browser, only if the User 
clicks on their ad banners, a process that Ludo Empire does 
not control.</Text>


<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
Ludo Empire's web servers automatically collect limited 
information about the User's computer's connection to the 
Internet, including the User's IP address, when the User 
visits the Portal. (User's IP address is a number that lets 
computers attached to the Internet know where to send data 
to the User -- such as the web pages viewed by the User). 
The User's IP address does not identify the User personally. 
Ludo Empire uses this information to deliver its web pages to 
Users upon request, to tailor its Portal to the interests of its 
users, to measure traffic within the Portal and let advertisers 
know the geographic locations from where Ludo Empire's 
visitors come. </Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
All the information that is required is specific and is related 
to the kind of services the user wishes to avail or access, 
and such information shall be used solely to provide 
services, including but not limited to the App and its features 
which are requested by the User. The details provided by the 
Users allow us to improve the App and bring you a fun, 
secure and user-friendly gaming experience. This is done 
with the view of complying with legal regulations and 
guidelines which facilitates a secure network, further 
ensuring the prevention of fraud or other imminent harm.  </Text>

<Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500', marginTop:"3%"}}> DISCLOSURE OF DATA</Text>
<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
Ludo Empire may share information as provided by you and 
data concerning usage of the Amusement Facility and 
participation in the Games with third-party service providers 
engaged by Ludo Empire, for data analytics or other similar 
purposes, like storage, improving the services and helping 
Ludo Empire serve you better.
 
 </Text>

 <Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
 Where we propose to use your personal information (that is, 
information that may be used to identify the User and that is 
not otherwise publicly available) for any other uses we will 
ensure that we notify you first. You will also be allowed to 
withhold or withdraw your consent for your use other than as 
listed above.
</Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
By using the Portal, you hereby expressly agree and grant 
consent to the collection, use and storage of this information 
by Ludo Empire. Ludo Empire reserves the right to share, 
disclose and transfer information collected hereunder with 
its affiliates solely for the purpose of services availed by 
Users. Further, Ludo Empire reserves the right to disclose 
personal information as obligated by law, in response to duly 
authorized legal processes, and governmental requests, as 
necessary to protect the rights and interests of Ludo Empire.</Text>

<Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500', marginTop:"3%"}}>LINKS </Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
Ludo Empire may include links to other websites. Such 
websites are governed by their respective privacy policies, 
which are beyond Ludo Empire's control. Once the User 
leaves Ludo Empire's servers (the User can tell where he/she 
is by checking the URL in the location bar on the User's 
browser), the use of any information provided by the User 
is governed by the privacy policy of the operator of the site 
which the User is visiting. That policy may differ from Ludo 
Empire's own. If the User can't find the privacy policy of any 
of these sites via a link from the site's homepage, the User 
may contact the site directly for more information. Ludo 
Empire is not responsible for the privacy practices or the 
content of such websites. </Text>

<Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500', marginTop:"3%"}}>DATA SECURITY </Text>
<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
All information gathered on Ludo Empire is securely stored 
within the Ludo Empire-controlled database. The database 
is stored on servers secured behind a firewall; access to 
such servers is password-protected and strictly limited 
based on a need-to-know basis. However, we understand 
that as effective as our security measures are, no security 
system is impenetrable. Thus, we cannot guarantee the 
security of our database, nor can we guarantee that 
information you supply will not be intercepted while being 
transmitted to us over the Internet. Further, any information 
you include in a posting to the discussion areas will be 
available to anyone with Internet access. By using the Portal, 
you understand and agree that your information may be used 
in or transferred to countries other than India. </Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
Ludo Empire also believes that the internet is an 
ever-evolving platform. We may periodically review from time 
to time and change our privacy policy to incorporate such 
future changes as may be considered appropriate, without 
any notice to you. Our use of any information we gather will 
always be consistent with the policy under which the 
information was collected, regardless of what the new policy 
may be. Any changes to our privacy policy will be posted on 
this page, so you are always aware of what information we 
collect, how we use it, how we store it and under what 
circumstances we disclose it.</Text>

<Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500', marginTop:"3%"}}> ADVERTISING </Text>
<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
Ludo Empire may present information to its online 
advertisers -- to help them understand our audience and 
confirm the value of advertising on the Portal -- it is usually 
in the form of aggregated statistics on traffic to various 
pages within our site. When you register with Ludo Empire, 
we contact you from time to time about updating your 
content to provide features which we believe may benefit 
you. </Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
Several deceptive emails, websites, blogs etc. claiming 
to be from or associated with Ludo Empire may or are 
circulating on the Internet. These emails, websites, blogs etc.
 often include our logo, photos, links, content, or other 
information. Some emails, websites, blogs etc. call the user 
to provide login name, password etc. or that the user has 
won a prize/ gift or provides a method to commit an 
illegal/unauthorized act or deed or request detailed personal 
information or a payment of some kind. The sources and 
contents of these emails, websites, blogs etc. and 
accompanying materials are in no way associated with Ludo 
Empire. For your protection, we strongly recommend not 
responding to those emails or using their websites, blogs etc. 
</Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
We may use the information provided by you to Ludo Empire, 
including your email address or phone number, to contact 
you about the Amusement Facilities or other services availed 
by you or to inform you of our Amusement Facilities 
and services. </Text>


<Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500', marginTop:"3%"}}> CONDITIONS OF USE </Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
Ludo Empire does not warrant that this portal, its services, or 
email sent by us or on our behalf will be free from virus 
attacks. On such event, Ludo Empire will not be liable for any 
damages of any kind arising from the use of this portal, 
including, but not limited to compensatory, direct, indirect, 
incidental, punitive, special, and consequential damages, 
loss of data, goodwill, business opportunity, income or profit, 
loss of or damage to property and claims of third-party. In no 
event will Ludo Empire be liable for any damage that is over 
in an amount of INR. 100/-.
</Text>

<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>

Guidelines for Children: Anyone under the age of 18, is not 
allowed by law to use the services of this website, and if 
there is any issue that arises from this, it shall be nil and void. </Text>

<Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500', marginTop:"3%"}}> RETENTION OF DATA</Text>
<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
Your personal information may be retained and may continue 
to be used until (i) the relevant purposes for the use of your 
information described in this Privacy Policy are no longer 
applicable to us; and (ii) we are no longer required by 
applicable law, regulations, contractual obligations, or 
legitimate business purposes to retain your personal 
information or retention of your personal information is not 
required for the establishment, exercise, or defence of any 
legal claim.</Text>

<Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500', marginTop:"3%"}}> 
APPLICABLE LAW & JURISDICTION</Text>
<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>
By visiting this Portal, you agree that the laws of India, and 
respective jurisdictions, without regard to its conflict of laws, 
and principles, govern this Privacy Policy and any dispute 
arising in respect hereof shall be subject to and governed by 
the dispute resolution process set out in the Terms and 
Conditions.
</Text>


<Text style={{color:"#EDA310", marginLeft:"3%", fontSize:10, fontWeight:'500', marginTop:"3%"}}> 
UPDATING INFORMATION</Text>
<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"1%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}>You will promptly notify Ludo Empire if there are any 
changes, updates, or modifications to your information. 
Further, you may also review, update, or modify your 
information and user preferences by logging into your 
Profile page on the Portal.

</Text>
<Text style={{color:"#fff", fontWeight:'400', fontSize:10, marginTop:"3%",marginLeft:"3%",textAlign:'justify', marginRight:"3%"}}> Our Privacy Policy was last updated on 28/11/2022. </Text>


                       </ScrollView>
                       </LinearGradient>

                       
                    <Image 
                      style={style.downdrag}
                      source={require("../../assets/Main/downdrag.png")}/>
                   
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
     downdrag:{
        alignSelf:'center',
        marginTop:"3%"
     }
   
    })