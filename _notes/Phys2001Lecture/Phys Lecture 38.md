---
title: "Phys Lecture 38"
date: 2026-04-20 00:00:00 -0400
class: Phys2001Lecture
---

Class: Phys 2001 - Lecture<br>
Subject/Topics: Physics<br>
Date: 04/20/2026
Teacher: Kay Kinoshita<br>

$$
W = \int_{v_i}^{v_f}Pdv
$$
$$
W = -nRT ln(\frac{v_f}{v_i})
$$
# Equipartition of Energy
From kinetic theory of gases
- for non-monatomic molecules, kinetic energy includes
	- translational
	- and rotation, vibrational
- each dimension of motion gives KE of $\frac{1}{2}k_B T$
	- translational: 3 dimensions (x, y, z) → $\frac{3}{2}k_B T$
	- rotational:
		- 2 dimensions for diatomic → $+k_BT$
	- other: vibrational (not covered here)
For this course, use for diatomic molecules
$$
K = \frac{3}{2}k_BT + k_BT = \frac{5}{2}k_BT => E_{\text{int}}=\frac{5}{2}Nk_BT = \frac{5}{2}nRT
$$

Molar specific heat, revisited for diatomic ideal gas
$$
C = \frac{Q}{n\Delta T}
$$
$$
E_{\text{int}} = \frac{5}{2}nRT
$$
- go back to 1st law
$$
\Delta E_{\text{int}} = Q+W => Q = \Delta E_{\text{int}} - W = \frac{5}{2}nR\Delta T - W
$$
constant volume 5/2 R
constant pressure 7/2 R
derived quantities
difference $C_p - C_v = R$
ratio $\gamma = \frac{7}{5}$ 

# Adiabatic Processes for an Ideal Gas
$$
PV^{\gamma} = \text{constant}
$$
$$
\gamma = \frac{C_P}{C_V} = \frac{C_v+R}{C_V}
$$
- monatomic gas $\gamma = 5/3$
- diatomic gas $\gamma = 7/5$
$$
P=\frac{\text{constant}}{V^{\gamma}}
$$
gamma is always greater than 1 and steeper than 1/V

$$
P_iV_i^{\gamma} = P_fV_f^{\gamma}
$$
# Heat Engine
a device that takes in energy by heat and, operating in a cyclic process, expels a fraction of that energy by means of work.
1. contact hot reservoir, $+Q_n$ to gas
2. work by gas
3. cold reservoir, $-Q_c$ to gas
4. work on gas
if $Q_n>Q_c$ gas does net positive work, $W_\text{eng}$

# Thermal Efficiency E
is defined as the ratio of the net work done by the engine during one cycle to the energy input at the higher temperature
$$
e = \frac{W_eng}{|Q_h|} = \frac{|Q_h| - |Q_c|}{|Q_h|} = 1-\frac{|Q_c|}{|Q_h|}
$$
isn't possible to have 100% efficiency

# Heat Pumps & Refrigerators
1. work on gas
2. hot reservoir, $-Q_h$ to gas
3. work by gas
4. cold reservoir $+Q_c$ to gas

net work on gas is >0
heat flows to high temp reservoir (heating)
heat flows from cold reservoir to pump (refrigeration)
