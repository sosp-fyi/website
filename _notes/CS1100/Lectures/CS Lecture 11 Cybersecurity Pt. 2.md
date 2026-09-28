---
title: "CS Lecture 11 Cybersecurity Pt. 2"
date: 2025-11-17 00:00:00 -0400
class: CS1100
---

Class: CS 1100 - Intro To Computer Science<br>
Subject/Topics: Computer Science<br>
Date: 11/17/2025
Teacher: Raj Bhatnagar<br>

# Main Types of Cyberattacks: Malware
- Malware: Mal(icious) (Soft)ware
	- Installed without user's consent
	- Able to run without being detected, shut down, or deleted
	- 1-in-14 downloads from internet contains malware (a Microsoft report 2014)
- Intruder program that executes itself in your computer
	- Disrupting computing or communications
	- Steal sensitive data, access private networks
	- Identity theft, cyberwarfare, espionage
	- Service disruption by targeting specific companies
# Virus
- Spreads via downloading or running an infected program
- Typically travels attached with program files and documents
- Recent ransomware attacks: power grids and petroleum companies
- An older ransomware attack (June 27th, 2017)
	- Was an attack to damage and destroy computers
	- Was not actually a ransomware attack
- Typical ransomware
	- Encrypts all files on your disk
	- Demands ransom, and if paid, decrypts your file
- Petya ransomware attack (2016)
	- Spreads by malicious emails, e.g., an application for a job with CV attached
	- The DV is actually an executable, a self extracting archive
	- After deploying the application the system crashes, restarts, and displays this: (red screen with a skull)
	- It overwrites the beginning sectors of the disk but encrypts and saves the original contents
	- It demands ransom by taking users to their website
	- A key is given to user after the payment
	- Using the key, the virus decrypts the encrypted files and restores the beginning sectors
	- Even though it demanded ransom (only ~$10,000 was paid) it did not have the capability to decrypt the files it encrypted
	- So, it appears it was intended to only cause damage and destruction.
# Worm
Spreads itself by replicating across computers or networks.
- SirCam (~2001)
	- Propagates via email from infected computers
	- It affected Windows 95, Windows 98, and Windows ME
	- Starts with one of a few standard lines:
		- I send you this file in order to have your advice
		- I hope you like the file that I sent to you
		- I hope you can help me with this file that I send, etc.
	- Mechanism for spreading:
		- Choose document files (.doc or .xls) at random
		- Infect with the same code
		- Email it out to addresses in the host's address book
		- Opening the infected attachment resulted in the target computer getting infected
	- Private files are shared with people and slows the system down
- StuxNet (~2010)
	- The worm is a "delivery vehicle" that carries a "payload" code that causes the damage
	- It infects a computer and hides itself
	- It exploits zero-day vulnerabilities
	- It checks if computer is connected to SIEMENS equipment (PLC)
		- If no, it does nothing
		- If yes, it delivers the payload code to the PLC and executes it
	- It also reports incorrect information about the status of the target machines to the monitoring subsystem
	- Resulted in damage to ~1000 centrifuges at Natanz nuclear plant in Iran
	- [Video on Stuxnet](https://www.youtube.com/watch?v=pnKjR0SD2Rw)
# Trojans
- Spread by appearing safe and hiding their true intent
- They do not replicate themselves
- May get installed with elevated privileges
- Perform damaging actions within the system
- Modify or delete files
- Spy on user activities for id theft, key logging, viewing webcam
- Use machine as part of a botnet
- Use computer for mining cryptocurrencies
- Use computer as proxy for illegal activities
- Use computer for money theft/ransom (crypto locker)
- [A list of some identified Trojans](https://en.wikipedia.org/wiki/Trojan_horse_(computing))
### A Typical Banking Trojan
- Victim infected by malicious email or a visit to a website
- Trojan waits for user to log in to a banking website
- Uses key logging or pop-up windows to steal credentials
- Redirects victim to a fake website that mimics the bank's site
- Victim logs into fake site, the Trojan logs into the real site
- Any two-factor code sent to the user is captured by the Trojan
- With all credentials in hand, Trojan operates the victim's bank account
### Dragonfly: A Trojan Attack for Industrial Espionage
- Dragonfly is a remote access Trojan (RAT) horse
- Only did espionage, caused no physical damage to plants
- Infected systems during 2010-2014, discovered in 2013
- Targeted ICS components
	- Manufacturing, energy, and pharma
	- Across US and Europe
- Initial targets: aviation and defense industries (US and Canada)
- Spear-Phishing attacks against high level individuals
	- used watering-hole attack strategy against these individuals
- Infected ICS vendors' websites
- Inserted malware in software updates downloaded by PLCs
#### Three-Phase Campaign
- Phase-1: Infect users' computers - gain access to all their files
	- RAT malware: Provides remote access to infected computers
- Phase-2: Industry experts redirected from legit websites to Dragonfly servers
	- These sites contained infected versions of software that experts needed
- Phase-3: Hacked into ICS component vendors' websites to infect the downloaded software updates
#### Information Stolen
- Contact lists from Outlook email servers
- Network details for communication with process control networks
- OPC (Ole for Process Control) information
- Karagany payload was delivered to some infected computers
	- This could steal and send back password files and screenshots
- A network scanner that looked for SCADA software
- Only espionage was detected; but actual physical damage is very much possible
# Spyware/Adware
- Monitors user's activity for marketing purposes
- Keeps track of web searches done by a user
	- Displays advertisements relevant to a user's interests
- Can collect any type of information from the system:
	- Internet surfing histories, logins, bank account information
- Not a virus: infected systems do not seek to infect others
- Some of them disable firewalls, letting more malware in
- Lot of anti-spyware products available
- Germany and Switzerland have laws regulating the types of spyware that is permitted
	- Vizio smart TV manufacturer has a spyware recording everything you watch on their TVs (Fined by FTC in Feb 2017)
# Phishing and Water-Hole Attacks
- Phishing
	- Most wide-spread cybercrime these days
	- Works because attacks play mind tricks with victims
	- 2014 FIFA:
		- Fake FIFA website asked people to sign petition supporting Uruguay Luis Alberto Suárez
		- Asked name, country, mobile #, and email address
	- Attackers send emails from victim's friends
	- Constantly evolving: mobile device phishing (rising recently)
- Spear Phishing
	- Targets the user via his/her trusted links (frequently visited friends/websites)
- Waterhole attacks
	- Attacker investigates the victim to find his/her behavior
	- Sends links to fake/infected websites (music, golf, movies)
- 91% attacks begin with phishing/spear phishing
- RSA's parent company EMC has been a victim (2011)
	- Email to 4 employees has attachment "2011 Recruitment Plan.xls"
	- Attacks gained access to company's anti-attack products
# Denial of Service
- Make a server dysfunctional by flooding it with messages
- Its like crowding a gate by unnecessary traffic so that real traffic cannot get through
- In 2015 botnets were used to attack banks to extract ransom
- Firewalls routers and switches can be used to defend against DoS attacks
Examples
- Brown's Ferry3 PLC failure
- In August 2006 TVA was forced to manually shut down one of their plant's two reactors
- Unresponsive PLCs caused two water pumps to fail
- Testing on the failed PLCs discovered they would crash when they encountered excessive network traffic
- A condition for which PLCs are rarely tested
