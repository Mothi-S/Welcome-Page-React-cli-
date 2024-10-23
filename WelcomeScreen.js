import React from 'react';
import {  View, 
          Text,
          StyleSheet,
          TouchableOpacity, 
          Pressable,
          Linking,
          Image} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <>
    <View style={styles.imagecontainer}>
        <Image
          style={styles.image} 
          source={require('./Limat.png')}
          />
          <Text style={styles.headertext}> LIMAT TECHNOLOGY SOLUTION </Text>
    </View>
    <View style={styles.container}>
    
      
      <Text style={styles.title}>WELCOME TO LIMAT TECH</Text>
      
        <View style ={styles.buttoncontainer}>

            <TouchableOpacity 
                style={styles.button}
                onPress={()=> navigation.navigate('Login')}>

                <Text style={styles.buttonText}>Already have an Account?</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Guest')}>
                <Text style={styles.buttonText}>Continue as Guest</Text>
            </TouchableOpacity>
        
        </View>

        <View style ={styles.textcontainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupText}>New? Register here!</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.footer}>
            <Text style={styles.footerText}>Follow us on</Text>
            <View style={styles.socialLinks}>
            <Pressable onPress={() => Linking.openURL('https://www.facebook.com')}>
                <Text style={styles.socialText}>Facebook</Text>
            </Pressable>
            <Pressable onPress={() => Linking.openURL('https://www.twitter.com')}>
                <Text style={styles.socialText}>Twitter</Text>
            </Pressable>
            <Pressable onPress={() => Linking.openURL('https://www.instagram.com')}>
                <Text style={styles.socialText}>Instagram</Text>
            </Pressable>
            </View>
            <Pressable onPress={() => Linking.openURL('mailto:info@liat-tech.com')}>
            <Text style={styles.contactText}>Contact Us</Text>
            </Pressable>

        </View>
    </View> 
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:"#c0c0c0",
    backgroundColor:'#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"black",
    marginBottom:30,
  },
  imagecontainer:{
    paddingLeft:"0%",
    backgroundColor:'#d3d3d3',
    flexDirection:'row',
    justifyContent:'flex-start',

  },
  image:{
    width:100,
    height:100,
    margin:20,
    resizeMode: 'contain',
  },
  headertext:{
    marginTop:40,
    fontSize:15,
    fontWeight:'bold',
    

  },
  buttoncontainer:{
    flexDirection:"row",
    justifyContent: "space-between",   
    flexDirection: 'row',
    width:'50%',
    paddingTop:"30%",
    paddingBottom:10,
  },
  
  button:{
    backgroundColor:"#191970",
    paddingVertical:10,
    borderRadius:8,
    width:100,

  },
  buttonText:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
  },

  textcontainer:{
    justifyContent:'center',
    fontSize:20,
    paddingBottom:10,
    marginBottom:20,
  },

  signupText:{
    color:'#191970',
  },

  footer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    marginBottom: 10,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 20,
  },
  socialText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
  contactText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  }

});

export default WelcomeScreen;
