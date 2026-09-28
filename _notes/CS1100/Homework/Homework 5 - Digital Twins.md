---
title: "Homework 5 - Digital Twins"
date: 2025-10-27 00:00:00 -0400
class: CS1100
---

Class: CS 1100 - Intro To Computer Science<br>
Subject/Topics: Computer Science<br>
Date: 10/27/2025
Teacher: Raj Bhatnagar<br>

# Difference between Product Twin, Data Twin, and Systems Twin (With Examples)
- A product twin is a representation of a product (a physical object) through its lifecycle, from concept and engineering to full functionality. For example, a digital twin of a jet engine would serve to test a bunch of different functions such as harsh weather conditions, wear and tear, and even optimize fuel consumption. 
- A data twin is a digital representation of something whose value is derived via real time/live data rather than the physical form of a product. An example is Google Maps, which is a digital twin of Earth's surface. It includes data about real time traffic and imagery from street level. 
- A system's twin is a digital replica of a larger system or network, rather than a single product. An example would be a digital twin of a factory which replicates all functions of the real life version, while also taking into account up and downstream logistics. 
Overall, a product twin is a digital version of a single product, a systems twin is a digital representation of a system or network of interacting physical elements, and a data twin is a digital version of a data context where data is controlling it (less about physical products and more about data). 
# What is a Supply Chain Digital Twin (With Example)
A supply chain digital twin is a virtual (usually real-time), representation of a physical supply chain network. This includes suppliers, manufacturing, logistics, warehouses, distribution, and customers. It uses data feeds, analytics, and simulation to provide visibility, scenario testing, risk mitigation, and optimization to provide an accurate digital twin. This type of digital twin allows companies to ask what would happen if a certain situation were to happen, and they'd be able to simulate it on the digital twin to know how things would be affected. 

1. An example of a company that has simulated their whole supply chain is Vita Coco (one of the largest coconut and plant waters providers in the world). 
2. The supply chain digital twin was built using the RELEX platform.
3. This digital twin captures "every node, cost, rule, and constraint" including lead times, capacity constraints, minimum order volumes, and cost trade-offs. This system helps determine the most profitable sourcing plan. So it could answer questions like: "Given these constraints, create a plan to maximize profit", or other questions regarding changes in demand and impact due to inventory changes. 
4. Some things that can't be determined from this digital twin are qualitative changes, or external behavioral questions. Things like how a new competitor will alter consumer preference or predicting the future changes to things outside data like regulation changes. It also might have trouble with human behavior responses, like how consumer sentiment will change if they make X change. Overall, it mainly can't model unknown future changes or extreme events beyond simulation assumptions. 

Information about this digital twin found [here](https://www.relexsolutions.com/resources/digital-twin-supply-chain/).
# Main Characteristics of Each of the Follow Types of Twins
- Descriptive Twin: This is the most basic level. It provides a digital replica of a physical object, asset or process, reflecting its current state (or design state). It enables visualization, understanding of structure/components/data, but often lacks real-time analytics or predictions. 
- Informative Twin: Builds on descriptive twin by integrating operational or sensor data (real-time or near-real-time). It takes that data and provides insight into how the asset/process is behaving. It may enable diagnostics, but not yet full prediction or self-action.
- Predictive Twin: This level uses real time, historical, and contextual data to forecast future behavior or failure. It can simulate what if scenarios, be ready for issues, and provide decision-support. It still may need human intervention. 
- Autonomous Twin: The most advanced level. It not only predicts but can autonomously act, adapt, optimize, and possibly control the physical counterpart with minimal human intervention. The twin uses AI/ML, and real-time feedback loops. 

### Examples
1. Descriptive Twin
	- Application: Autodesk Tandem, used for building assets (e.g., the Toronto office of Autodesk, Inc.) to create a twin of the facility.
	- Company/Designer: Autodesk, Inc.
	- Software: Autodesk Tandem (cloud platform).
	- [Link](https://www.autodesk.com/products/bim-collaborate/features/digital-twin)
2. Informative Twin
	- Application: Lowe's Companies, Inc. creates digital twins of their retail stores which combines spatial data, product location, order history, and near-real-time updates.
	- Company/Designer: Lowe's Companies, Inc.
	- Software: Nvidia Omniverse 3D development tool.
	- [Link](https://www.sap.com/sk/blogs/digital-twins-at-work)
3. Predictive Twin
	- Application: Siemens AG uses a system called Simotics IQ with data connectivity via MindSphere for predictive maintenance of motors. 
	- Company/Designer: Siemens AG
	- Software: MindSphere and Simit from Siemens
	- [Link](https://press.siemens.com/global/en/pressrelease/siemens-showcases-digitalization-applications-machine-and-plant-builders)
4. Autonomous Twin
	- Application: Autonomous pulp and paper mill (digital twin of the full plant)
	- Company/Designer: Brad S. Carlberg/BSC Engineering (references to ANDRITZ)
	- Software: Virtual plant dynamic model, model-based predictive control, and mentions of ANDRITZ's IDEAS simulation software.
	- [Link](https://ohiolink-uc.primo.exlibrisgroup.com/discovery/fulldisplay?docid=cdi_ieee_primary_9620318&context=PC&vid=01OHIOLINK_UC%3AUC&lang=en&search_scope=AlmostEverything&adaptor=Primo%20Central&tab=AlmostEverything&query=any%2Ccontains%2CThe%20Autonomous%20Mill&offset=0)
