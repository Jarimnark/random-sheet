/* TSIC (Thailand Standard Industrial Classification, TSIC 2009) reference data.
 * TSIC is aligned with ISIC Rev.4 down to the 4-digit class level, so every code
 * below is a real 4-digit TSIC/ISIC class you can look up in the official list.
 * Thailand adds a 5th national digit — confirm the exact 5-digit subclass on the
 * official source (NSO / DBD DataWarehouse) before using a code on a filing.
 *
 * Each domain row is "CCCC|business domain idea" — one buildable problem area that
 * belongs to that class. Several rows share a class on purpose: one TSIC class is a
 * whole industry, and each row is a different product opportunity inside it.
 */

/* 21 sections (A–U). */
window.TSIC_SECTIONS = {
  A: { en: "Agriculture, forestry and fishing", th: "เกษตรกรรม ป่าไม้ และการประมง" },
  B: { en: "Mining and quarrying", th: "การทำเหมืองแร่และเหมืองหิน" },
  C: { en: "Manufacturing", th: "การผลิต" },
  D: { en: "Electricity, gas, steam and air conditioning supply", th: "ไฟฟ้า ก๊าซ ไอน้ำ และระบบปรับอากาศ" },
  E: { en: "Water supply, sewerage and waste management", th: "การประปา การจัดการน้ำเสียและของเสีย" },
  F: { en: "Construction", th: "การก่อสร้าง" },
  G: { en: "Wholesale and retail trade; repair of vehicles", th: "การขายส่งและขายปลีก การซ่อมยานยนต์" },
  H: { en: "Transportation and storage", th: "การขนส่งและสถานที่เก็บสินค้า" },
  I: { en: "Accommodation and food service activities", th: "ที่พักแรมและบริการด้านอาหาร" },
  J: { en: "Information and communication", th: "ข้อมูลข่าวสารและการสื่อสาร" },
  K: { en: "Financial and insurance activities", th: "กิจกรรมทางการเงินและการประกันภัย" },
  L: { en: "Real estate activities", th: "กิจกรรมอสังหาริมทรัพย์" },
  M: { en: "Professional, scientific and technical activities", th: "กิจกรรมวิชาชีพ วิทยาศาสตร์และเทคนิค" },
  N: { en: "Administrative and support service activities", th: "การบริหารและบริการสนับสนุน" },
  O: { en: "Public administration and defence", th: "การบริหารราชการและการป้องกันประเทศ" },
  P: { en: "Education", th: "การศึกษา" },
  Q: { en: "Human health and social work activities", th: "สาธารณสุขและสังคมสงเคราะห์" },
  R: { en: "Arts, entertainment and recreation", th: "ศิลปะ ความบันเทิงและนันทนาการ" },
  S: { en: "Other service activities", th: "กิจกรรมบริการด้านอื่น ๆ" },
  T: { en: "Activities of households as employers", th: "กิจกรรมการจ้างงานในครัวเรือน" },
  U: { en: "Activities of extraterritorial organizations", th: "กิจกรรมขององค์การระหว่างประเทศ" }
};

/* All 88 divisions. Section is derived from the division number in app.js. */
window.TSIC_DIVISIONS = {
  "01": { en: "Crop and animal production, hunting", th: "การเพาะปลูกและการเลี้ยงสัตว์ การล่าสัตว์" },
  "02": { en: "Forestry and logging", th: "ป่าไม้และการทำไม้" },
  "03": { en: "Fishing and aquaculture", th: "การประมงและการเพาะเลี้ยงสัตว์น้ำ" },
  "05": { en: "Mining of coal and lignite", th: "การทำเหมืองถ่านหินและลิกไนต์" },
  "06": { en: "Extraction of crude petroleum and natural gas", th: "การขุดเจาะปิโตรเลียมและก๊าซธรรมชาติ" },
  "07": { en: "Mining of metal ores", th: "การทำเหมืองแร่โลหะ" },
  "08": { en: "Other mining and quarrying", th: "การทำเหมืองแร่และเหมืองหินอื่น ๆ" },
  "09": { en: "Mining support service activities", th: "บริการสนับสนุนการทำเหมือง" },
  "10": { en: "Manufacture of food products", th: "การผลิตผลิตภัณฑ์อาหาร" },
  "11": { en: "Manufacture of beverages", th: "การผลิตเครื่องดื่ม" },
  "12": { en: "Manufacture of tobacco products", th: "การผลิตผลิตภัณฑ์ยาสูบ" },
  "13": { en: "Manufacture of textiles", th: "การผลิตสิ่งทอ" },
  "14": { en: "Manufacture of wearing apparel", th: "การผลิตเสื้อผ้าเครื่องแต่งกาย" },
  "15": { en: "Manufacture of leather and related products", th: "การผลิตหนังและผลิตภัณฑ์หนัง" },
  "16": { en: "Manufacture of wood and wood products", th: "การผลิตไม้และผลิตภัณฑ์จากไม้" },
  "17": { en: "Manufacture of paper and paper products", th: "การผลิตกระดาษและผลิตภัณฑ์กระดาษ" },
  "18": { en: "Printing and reproduction of recorded media", th: "การพิมพ์และการทำสำเนาสื่อบันทึก" },
  "19": { en: "Manufacture of coke and refined petroleum products", th: "การผลิตถ่านโค้กและผลิตภัณฑ์ปิโตรเลียม" },
  "20": { en: "Manufacture of chemicals and chemical products", th: "การผลิตเคมีภัณฑ์และผลิตภัณฑ์เคมี" },
  "21": { en: "Manufacture of pharmaceuticals", th: "การผลิตเภสัชภัณฑ์และยา" },
  "22": { en: "Manufacture of rubber and plastics products", th: "การผลิตผลิตภัณฑ์ยางและพลาสติก" },
  "23": { en: "Manufacture of other non-metallic mineral products", th: "การผลิตผลิตภัณฑ์อโลหะ" },
  "24": { en: "Manufacture of basic metals", th: "การผลิตโลหะขั้นมูลฐาน" },
  "25": { en: "Manufacture of fabricated metal products", th: "การผลิตผลิตภัณฑ์โลหะประดิษฐ์" },
  "26": { en: "Manufacture of computer, electronic and optical products", th: "การผลิตคอมพิวเตอร์ อิเล็กทรอนิกส์และอุปกรณ์ทางทัศนศาสตร์" },
  "27": { en: "Manufacture of electrical equipment", th: "การผลิตอุปกรณ์ไฟฟ้า" },
  "28": { en: "Manufacture of machinery and equipment", th: "การผลิตเครื่องจักรและเครื่องมือ" },
  "29": { en: "Manufacture of motor vehicles and trailers", th: "การผลิตยานยนต์และรถพ่วง" },
  "30": { en: "Manufacture of other transport equipment", th: "การผลิตอุปกรณ์ขนส่งอื่น ๆ" },
  "31": { en: "Manufacture of furniture", th: "การผลิตเฟอร์นิเจอร์" },
  "32": { en: "Other manufacturing", th: "การผลิตอื่น ๆ" },
  "33": { en: "Repair and installation of machinery and equipment", th: "การซ่อมและติดตั้งเครื่องจักรและอุปกรณ์" },
  "35": { en: "Electricity, gas, steam and air conditioning supply", th: "การจัดหาไฟฟ้า ก๊าซ ไอน้ำและระบบปรับอากาศ" },
  "36": { en: "Water collection, treatment and supply", th: "การจัดเก็บ ทำให้บริสุทธิ์และจ่ายน้ำ" },
  "37": { en: "Sewerage", th: "การจัดการน้ำเสีย" },
  "38": { en: "Waste collection, treatment and disposal; materials recovery", th: "การเก็บ บำบัดและกำจัดขยะ การนำวัสดุกลับมาใช้ใหม่" },
  "39": { en: "Remediation and other waste management services", th: "การฟื้นฟูและการจัดการของเสียอื่น ๆ" },
  "41": { en: "Construction of buildings", th: "การก่อสร้างอาคาร" },
  "42": { en: "Civil engineering", th: "งานวิศวกรรมโยธา" },
  "43": { en: "Specialized construction activities", th: "งานก่อสร้างเฉพาะทาง" },
  "45": { en: "Wholesale and retail trade and repair of motor vehicles", th: "การขายและการซ่อมยานยนต์และจักรยานยนต์" },
  "46": { en: "Wholesale trade, except of motor vehicles", th: "การขายส่ง (ยกเว้นยานยนต์)" },
  "47": { en: "Retail trade, except of motor vehicles", th: "การขายปลีก (ยกเว้นยานยนต์)" },
  "49": { en: "Land transport and transport via pipelines", th: "การขนส่งทางบกและทางท่อ" },
  "50": { en: "Water transport", th: "การขนส่งทางน้ำ" },
  "51": { en: "Air transport", th: "การขนส่งทางอากาศ" },
  "52": { en: "Warehousing and support activities for transportation", th: "คลังสินค้าและบริการสนับสนุนการขนส่ง" },
  "53": { en: "Postal and courier activities", th: "ไปรษณีย์และการรับส่งเอกสารหรือสิ่งของ" },
  "55": { en: "Accommodation", th: "ที่พักแรม" },
  "56": { en: "Food and beverage service activities", th: "การบริการอาหารและเครื่องดื่ม" },
  "58": { en: "Publishing activities", th: "การจัดพิมพ์จำหน่ายหรือเผยแพร่" },
  "59": { en: "Motion picture, video, television and sound recording", th: "ภาพยนตร์ วีดิทัศน์ โทรทัศน์และการบันทึกเสียง" },
  "60": { en: "Programming and broadcasting activities", th: "การจัดผังรายการและการแพร่ภาพกระจายเสียง" },
  "61": { en: "Telecommunications", th: "โทรคมนาคม" },
  "62": { en: "Computer programming, consultancy and related activities", th: "การเขียนโปรแกรมและการให้คำปรึกษาด้านคอมพิวเตอร์" },
  "63": { en: "Information service activities", th: "การบริการสารสนเทศ" },
  "64": { en: "Financial service activities, except insurance", th: "บริการทางการเงิน (ยกเว้นการประกันภัย)" },
  "65": { en: "Insurance, reinsurance and pension funding", th: "การประกันภัย การประกันภัยต่อและกองทุนบำเหน็จบำนาญ" },
  "66": { en: "Activities auxiliary to financial services and insurance", th: "กิจกรรมสนับสนุนการเงินและการประกันภัย" },
  "68": { en: "Real estate activities", th: "กิจกรรมอสังหาริมทรัพย์" },
  "69": { en: "Legal and accounting activities", th: "กิจกรรมด้านกฎหมายและการบัญชี" },
  "70": { en: "Head offices and management consultancy", th: "สำนักงานใหญ่และการให้คำปรึกษาด้านการบริหาร" },
  "71": { en: "Architectural and engineering activities; technical testing", th: "สถาปัตยกรรม วิศวกรรมและการทดสอบทางเทคนิค" },
  "72": { en: "Scientific research and development", th: "การวิจัยและพัฒนาทางวิทยาศาสตร์" },
  "73": { en: "Advertising and market research", th: "การโฆษณาและการวิจัยตลาด" },
  "74": { en: "Other professional, scientific and technical activities", th: "กิจกรรมวิชาชีพ วิทยาศาสตร์และเทคนิคอื่น ๆ" },
  "75": { en: "Veterinary activities", th: "กิจกรรมด้านสัตวแพทย์" },
  "77": { en: "Rental and leasing activities", th: "การให้เช่าและการให้เช่าแบบลีสซิ่ง" },
  "78": { en: "Employment activities", th: "การจัดหางาน" },
  "79": { en: "Travel agency, tour operator and reservation services", th: "ตัวแทนท่องเที่ยว ผู้จัดนำเที่ยวและบริการสำรองที่นั่ง" },
  "80": { en: "Security and investigation activities", th: "การรักษาความปลอดภัยและการสืบสวน" },
  "81": { en: "Services to buildings and landscape activities", th: "การบริการอาคารสถานที่และภูมิทัศน์" },
  "82": { en: "Office administrative and business support activities", th: "การบริหารสำนักงานและบริการสนับสนุนธุรกิจ" },
  "84": { en: "Public administration, defence and social security", th: "การบริหารราชการ การป้องกันประเทศและประกันสังคม" },
  "85": { en: "Education", th: "การศึกษา" },
  "86": { en: "Human health activities", th: "กิจกรรมด้านสุขภาพของมนุษย์" },
  "87": { en: "Residential care activities", th: "การดูแลแบบพักค้าง" },
  "88": { en: "Social work activities without accommodation", th: "สังคมสงเคราะห์แบบไม่พักค้าง" },
  "90": { en: "Creative, arts and entertainment activities", th: "การสร้างสรรค์ ศิลปะและความบันเทิง" },
  "91": { en: "Libraries, archives, museums and cultural activities", th: "ห้องสมุด หอจดหมายเหตุ พิพิธภัณฑ์และวัฒนธรรม" },
  "92": { en: "Gambling and betting activities", th: "การพนันและการเสี่ยงโชค" },
  "93": { en: "Sports, amusement and recreation activities", th: "กีฬา การพักผ่อนหย่อนใจและนันทนาการ" },
  "94": { en: "Activities of membership organizations", th: "กิจกรรมขององค์กรสมาชิก" },
  "95": { en: "Repair of computers, personal and household goods", th: "การซ่อมคอมพิวเตอร์และของใช้ส่วนบุคคลหรือในครัวเรือน" },
  "96": { en: "Other personal service activities", th: "การบริการส่วนบุคคลอื่น ๆ" },
  "97": { en: "Households as employers of domestic personnel", th: "ครัวเรือนที่จ้างผู้ช่วยทำงานบ้าน" },
  "98": { en: "Undifferentiated household goods and services for own use", th: "การผลิตสินค้าและบริการในครัวเรือนเพื่อใช้เอง" },
  "99": { en: "Activities of extraterritorial organizations and bodies", th: "กิจกรรมขององค์การระหว่างประเทศและภาคีสมาชิก" }
};

/* Domain rows: "CCCC|business domain". Parsed by app.js. */
window.TSIC_DOMAINS_RAW = `
0111|Maize and cassava field-crop planting schedules
0111|Soybean and peanut contract-farming coordination
0111|Field-crop yield forecasting from weather data
0112|Rice farm planting and harvest scheduling
0112|Paddy moisture and grain-quality grading
0112|Rice mill paddy intake and price tracking
0113|Vegetable greenhouse climate control
0113|Hydroponic and vertical-farm nutrient dosing
0113|Cut-vegetable cold-chain from farm to market
0114|Sugar cane plot yield and CCS quality tracking
0114|Cane harvest truck queue management at the mill
0115|Tobacco leaf curing barn monitoring
0116|Cotton and kenaf fibre crop plot records
0119|Flower and ornamental plant crop cycles
0119|Fodder crop planning for livestock farms
0121|Vineyard growth stage and pest scouting
0122|Durian and mango orchard tree-level records
0122|Tropical fruit export grading and traceability
0122|Banana and pineapple plantation logistics
0123|Citrus orchard irrigation scheduling
0124|Temperate stone-fruit highland orchard planning
0125|Berry and nut small-holder cooperative sales
0126|Oil palm plantation harvest round planning
0126|Coconut plantation yield and copra tracking
0127|Coffee cherry to green-bean lot traceability
0127|Tea plantation plucking round management
0128|Herb and spice crop drying and grading
0128|Medicinal and pharmaceutical crop compliance records
0129|Rubber plantation tapping and latex collection
0130|Plant nursery and seedling inventory
0130|Tissue-culture propagation lab records
0141|Dairy and beef cattle herd management
0141|Buffalo breeding and lineage registry
0142|Horse stable care and training logs
0144|Goat and sheep flock health tracking
0145|Pig farm feed conversion and biosecurity
0145|Swine disease outbreak early warning
0146|Broiler house environment automation
0146|Layer farm egg production and grading
0146|Poultry hatchery incubation monitoring
0149|Insect farming (cricket protein) production
0149|Beekeeping colony health and honey harvest
0150|Mixed crop-livestock smallholder farm records
0161|Agricultural drone spraying service dispatch
0161|Farm machinery sharing and rental booking
0161|Soil testing and fertilizer recommendation
0162|Livestock artificial insemination service records
0163|Post-harvest drying and silo storage control
0163|Grain fumigation and pest control records
0164|Certified seed processing and lot testing
0170|Wildlife trapping permit and quota records
0210|Reforestation plot survival monitoring
0210|Forest plantation carbon credit measurement
0220|Timber logging permit and log tagging
0220|Log truck haulage from forest to mill
0230|Non-wood forest product community collection
0240|Forest fire detection and hotspot response
0240|Forest inventory survey with drone imagery
0311|Marine fishing vessel catch reporting
0311|Fishing fleet fuel and trip cost tracking
0311|Illegal fishing and IUU compliance logging
0312|Freshwater fishing community catch records
0321|Coastal shrimp pond water quality monitoring
0321|Marine cage fish feeding automation
0321|Sea bass and grouper hatchery records
0322|Freshwater tilapia pond aeration control
0322|Catfish farm feed and growth tracking
0322|Aquaculture disease diagnosis assistance
0322|Ornamental fish breeding and export records
0510|Coal mine production and shift reporting
0520|Lignite mine haul truck dispatch
0610|Offshore oil platform maintenance planning
0610|Crude oil production allocation and metering
0620|Natural gas well pressure monitoring
0620|Gas pipeline leak detection analytics
0710|Iron ore grade control and blending
0721|Radioactive ore handling safety records
0729|Tin and zinc ore concentrate tracking
0810|Stone quarry blasting and vibration records
0810|Sand pit volume survey with drone photogrammetry
0810|Clay and kaolin quarry stock management
0891|Fertilizer mineral and gypsum mine logistics
0892|Peat extraction site environmental monitoring
0893|Sea salt farm evaporation pond planning
0893|Rock salt brine field production records
0899|Gemstone mining lot valuation records
0899|Marble and granite block yard inventory
0910|Oil and gas drilling rig service scheduling
0910|Well logging data management
0990|Mine survey and geotechnical monitoring service
0990|Mine site rehabilitation compliance tracking
1010|Slaughterhouse line yield and carcass grading
1010|Meat processing HACCP record keeping
1010|Halal certification chain-of-custody tracking
1020|Seafood processing plant cold-chain monitoring
1020|Canned tuna lot traceability for export
1020|Surimi and fish paste production planning
1030|Fruit and vegetable canning line scheduling
1030|Freeze-dried fruit batch quality records
1030|Frozen vegetable IQF line monitoring
1040|Palm oil mill extraction rate optimisation
1040|Rice bran and coconut oil refining batches
1050|Dairy plant pasteurisation batch records
1050|UHT milk shelf-life and recall tracing
1050|Yoghurt and cheese fermentation monitoring
1061|Rice mill milling yield and broken-rice grading
1061|Flour mill blending and specification control
1062|Tapioca starch plant production tracking
1062|Modified starch batch specification records
1071|Bakery production planning and waste reduction
1071|Bread route delivery and returns tracking
1072|Sugar refinery crystallisation monitoring
1073|Chocolate and candy confectionery batches
1074|Instant noodle line changeover planning
1074|Rice noodle and pasta production records
1075|Ready-meal assembly line and allergen control
1075|Airline and hospital catering meal planning
1079|Coffee roasting profile and batch logs
1079|Seasoning and sauce blending recipes
1079|Snack food packaging line efficiency
1080|Animal feed formulation and least-cost mixing
1080|Pet food batch traceability
1101|Distillery spirit ageing and warehouse records
1102|Fruit wine fermentation batch monitoring
1103|Brewery brewhouse and fermentation control
1104|Drinking water bottling plant sanitation logs
1104|Soft drink syrup room batch control
1200|Tobacco product excise stamp reconciliation
1311|Yarn spinning mill machine efficiency
1312|Weaving mill loom stop analysis
1313|Textile dyeing recipe and colour matching
1391|Knitted fabric production scheduling
1392|Home textile (bedding, towel) order management
1393|Carpet and rug production and custom sizing
1394|Rope and fishing-net production records
1399|Technical and non-woven textile QC
1410|Garment factory cut-make-trim line balancing
1410|Uniform made-to-measure order tracking
1410|Apparel sample development and approval flow
1420|Fur and hide article production records
1430|Knitwear and sock factory production
1511|Leather tannery chemical and effluent records
1512|Handbag and luggage production tracking
1520|Footwear factory last and size-run planning
1610|Sawmill log intake and lumber recovery
1621|Plywood and particleboard press monitoring
1622|Prefabricated wooden component orders
1623|Wooden pallet and crate production
1629|Rattan and bamboo craft production records
1701|Pulp and paper machine quality control
1702|Corrugated box design and quoting
1709|Tissue and hygiene paper converting lines
1811|Commercial print job estimating and scheduling
1811|Label and packaging print proof approval
1812|Prepress and imposition service workflow
1820|Media duplication and serialisation records
1910|Coke oven battery temperature monitoring
1920|Refinery unit yield and blending optimisation
1920|Fuel terminal loading and custody transfer
2011|Industrial gas cylinder tracking
2011|Basic chemical batch reactor control
2012|Fertilizer blending and nutrient formulation
2013|Plastic resin compounding recipes
2021|Pesticide registration and label compliance
2022|Paint colour formulation and tinting
2023|Cosmetics and toiletry batch manufacturing records
2023|Detergent filling line efficiency
2029|Adhesive and industrial chemical batch QC
2030|Synthetic fibre extrusion line monitoring
2100|Pharmaceutical GMP batch record management
2100|Drug stability study data capture
2100|Herbal medicine extraction batch tracking
2211|Tyre curing press and defect tracking
2219|Rubber glove dipping line monitoring
2219|Rubber part mould and tooling records
2220|Plastic injection moulding cycle monitoring
2220|PET preform and bottle blowing production
2220|Plastic film extrusion quality control
2310|Glass container furnace and defect tracking
2391|Refractory brick production records
2392|Clay brick and roof tile kiln monitoring
2393|Ceramic tableware glazing and firing records
2394|Cement plant kiln energy optimisation
2395|Precast concrete element production tracking
2395|Ready-mix concrete batching and dispatch
2396|Stone cutting and slab yard inventory
2399|Asbestos-free fibre cement production QC
2410|Steel mill melt shop heat tracking
2410|Rebar and coil inventory by heat number
2420|Aluminium smelter pot line monitoring
2420|Precious metal refining assay records
2431|Iron foundry mould and casting defect analysis
2432|Non-ferrous die casting production records
2511|Structural steel fabrication shop drawings
2511|Steel structure weld inspection records
2512|Pressure vessel and tank fabrication QC
2513|Industrial boiler manufacture and testing
2520|Weapons and ammunition production control
2591|Metal stamping die maintenance tracking
2592|Electroplating and coating line records
2592|CNC machining job shop scheduling
2593|Hand tool and cutlery production records
2599|Metal fastener and spring production
2610|PCB assembly SMT line traceability
2610|Semiconductor test yield analysis
2620|Computer assembly build-to-order flow
2630|Telecom equipment production testing
2640|Consumer electronics warranty defect analysis
2651|Instrument calibration certificate management
2652|Watch assembly and movement records
2660|Medical imaging device manufacturing QC
2670|Optical lens grinding and coating records
2680|Storage media production line records
2710|Transformer manufacture and type testing
2720|Lithium battery cell formation monitoring
2720|Battery pack BMS test and traceability
2731|Fibre optic cable drawing line monitoring
2732|Wire and cable production and drum tracking
2733|Switch and socket assembly line records
2740|LED luminaire production and photometric test
2750|Home appliance assembly line quality
2790|Electrical control panel build documentation
2811|Engine and turbine assembly test cell records
2812|Hydraulic and pneumatic system build orders
2813|Pump and valve production and pressure testing
2814|Bearing and gearbox production tracking
2815|Industrial furnace commissioning records
2816|Crane and hoist manufacture and load testing
2817|Office machinery assembly records
2818|Power tool production line testing
2819|General machinery spare-part catalogue
2821|Agricultural machinery build and dealer orders
2822|Machine tool production and precision QC
2823|Metallurgy machinery project engineering
2824|Mining and construction machinery assembly
2825|Food processing machinery custom builds
2826|Textile machinery retrofit projects
2829|Packaging machinery build and FAT records
2829|Special-purpose machine design library
2910|Vehicle assembly line takt and andon monitoring
2910|EV drivetrain assembly traceability
2920|Truck body and trailer build orders
2930|Auto parts supplier PPAP documentation
2930|Auto part traceability for recall handling
3011|Shipyard block assembly and welding records
3012|Pleasure boat build and fit-out tracking
3020|Rail rolling stock overhaul records
3030|Aircraft part manufacture and AS9100 records
3040|Military vehicle build configuration control
3091|Motorcycle assembly line quality tracking
3092|Bicycle frame production and custom builds
3099|Trolley and cart production records
3100|Custom furniture quotation and shop drawings
3100|Furniture factory panel cutting optimisation
3100|Flat-pack assembly instruction generation
3211|Jewellery order tracking and gold weight control
3211|Gemstone certification and stock valuation
3212|Costume jewellery production runs
3220|Musical instrument build and setup records
3230|Sports equipment production and testing
3240|Toy safety testing and compliance records
3250|Dental prosthetic digital workflow
3250|Orthopaedic implant lot traceability
3290|Broom, brush and stationery production
3290|3D-printing service bureau job queue
3311|Metal structure repair work orders
3312|Industrial machinery predictive maintenance
3312|Machine spare-part demand forecasting
3313|Electronic instrument repair and calibration
3314|Electric motor rewinding shop records
3315|Ship and rail equipment repair docking plans
3319|Industrial equipment overhaul scheduling
3320|Machinery installation and commissioning checklists
3510|Solar farm generation and inverter monitoring
3510|Wind farm turbine performance analytics
3510|Power plant outage planning
3510|Rooftop solar rental and PPA billing
3510|Peer-to-peer energy trading ledger
3510|Grid demand response participation
3510|EV charging station network management
3520|LPG cylinder distribution and safety records
3520|Biogas plant digester monitoring
3520|City gas pipeline customer metering
3530|District cooling plant efficiency monitoring
3530|Industrial steam supply metering and billing
3600|Waterworks pump station SCADA monitoring
3600|Non-revenue water leak detection analytics
3600|Water quality sampling and lab results
3600|Village water supply prepaid metering
3700|Wastewater treatment plant process control
3700|Septic tank service scheduling
3700|Industrial effluent discharge compliance reporting
3811|Municipal waste collection route optimisation
3811|Household waste separation incentive tracking
3812|Hazardous waste manifest and transport tracking
3821|Landfill gas and leachate monitoring
3821|Waste-to-energy plant feedstock tracking
3822|Infectious medical waste chain of custody
3830|Scrap metal yard weighbridge and pricing
3830|Plastic recycling batch quality tracking
3830|E-waste dismantling and material recovery records
3900|Contaminated site remediation monitoring
3900|Oil spill response resource coordination
4100|Residential construction project scheduling
4100|Building BOQ and cost estimation
4100|Construction site daily progress photo log
4100|Site labour attendance and safety induction
4100|Building permit document workflow
4100|Construction defect punch-list tracking
4100|Green building certification evidence collection
4210|Road construction quantity and asphalt QC
4210|Railway track works progress monitoring
4210|Road maintenance defect reporting from patrols
4220|Water and sewer utility project as-built records
4220|Power transmission line construction tracking
4220|Telecom duct and fibre build management
4290|Dam and irrigation canal project monitoring
4290|Port and marine works dredging records
4311|Demolition permit and debris disposal tracking
4312|Site survey and earthwork volume calculation
4321|Electrical installation testing certificates
4322|Plumbing and HVAC installation commissioning
4329|Lift and escalator installation records
4330|Interior fit-out subcontractor coordination
4330|Painting and finishing progress claims
4390|Piling and foundation works logging
4390|Scaffolding inspection and hire tracking
4390|Crane lift plan approval workflow
4510|Car dealership test drive and lead follow-up
4510|Used car inspection and pricing marketplace
4510|Vehicle trade-in valuation tool
4510|EV showroom configurator and reservation
4520|Garage repair order and parts estimation
4520|Fleet maintenance scheduling and downtime tracking
4520|Tyre shop service history and reminders
4520|Body shop insurance claim photo evidence
4530|Auto parts catalogue with fitment lookup
4530|Spare part cross-reference and stock sharing
4540|Motorcycle dealer instalment sales tracking
4540|Motorcycle service queue and reminder system
4610|Commission agent order and payout tracking
4620|Live animal and feed grain trading platform
4620|Agricultural commodity price aggregation
4630|Food and beverage wholesale route sales
4630|Fresh produce wholesale market auction records
4630|Beverage distributor cooler and asset tracking
4641|Textile and apparel wholesale line sheets
4641|Footwear wholesale size-run ordering
4649|Household goods wholesale catalogue ordering
4649|Cosmetics wholesale distributor stock allocation
4651|IT hardware and software reseller quoting
4651|Software licence resale and renewal tracking
4652|Electronic component distributor stock search
4652|Telecom equipment wholesale project quoting
4653|Farm machinery dealer parts and warranty
4659|Industrial equipment wholesale RFQ handling
4661|Fuel wholesale depot dispatch and reconciliation
4661|LPG wholesale cylinder deposit tracking
4662|Steel and metal trading price quotation
4663|Construction material yard stock and delivery
4663|Hardware wholesale trade-credit management
4669|Scrap and surplus material trading platform
4690|General wholesale multi-category order desk
4711|Convenience store shelf replenishment
4711|Supermarket promotion planning and markdown
4711|Grocery loss prevention and shrinkage analysis
4711|Hypermarket queue and checkout staffing
4719|Department store tenant sales reporting
4721|Fresh market vendor daily sales tracking
4721|Butcher and deli counter weight pricing
4721|Bakery shop daily production vs sales
4722|Beverage and water shop delivery rounds
4723|Tobacco retail age verification and stock
4730|Petrol station pump reconciliation and shift cash
4730|Fuel station loyalty and fleet card
4741|Mobile phone shop IMEI and warranty records
4741|Computer shop build quotes and RMA
4742|Audio and video equipment retail demo booking
4751|Fabric shop roll stock and cut-length pricing
4752|Paint and hardware store colour mixing orders
4753|Flooring and wall covering measurement quoting
4759|Home appliance retail delivery and installation
4759|Furniture and lighting showroom stock lookup
4761|Bookstore stock and consignment reporting
4761|Stationery retail school-season demand planning
4762|Music and video retail catalogue management
4763|Sporting goods retail size and stock lookup
4764|Toy and hobby retail seasonal planning
4771|Fashion boutique multi-channel stock sync
4771|Shoe retail size availability across branches
4771|Second-hand clothing retail item tagging
4772|Pharmacy dispensing and drug interaction check
4772|Pharmacy prescription refill reminders
4772|Cosmetics retail shade matching assistant
4772|Medical supply retail rental item tracking
4773|Flower shop order and delivery scheduling
4773|Pet shop stock and animal record keeping
4773|Optical shop prescription and lens ordering
4773|Mobile accessory kiosk sales tracking
4773|Souvenir and handicraft retail inventory
4774|Second-hand goods pawn and resale records
4774|Antique and collectible authentication records
4781|Street food vendor daily takings and cost
4781|Night market stall reservation and fees
4782|Market clothing stall stock rotation
4789|Weekend market stall booking platform
4791|Online store order and fulfilment dashboard
4791|Live-selling order capture and payment matching
4791|Social commerce chat-to-order conversion
4791|Marketplace review and seller rating analytics
4791|Dropshipping supplier sync and margin tracking
4791|Subscription box recurring fulfilment
4799|Direct sales agent commission tracking
4799|Vending machine telemetry and restocking
4799|Door-to-door water delivery scheduling
4911|Intercity rail seat reservation and ticketing
4912|Rail freight wagon load planning
4921|City bus arrival prediction and ticketing
4921|Songthaew and minibus route mapping
4921|Mass transit crowding and headway monitoring
4922|Ride-hailing driver dispatch and matching
4922|Taxi meter fare audit and complaint handling
4922|School bus route and child pickup tracking
4922|Charter van tour trip management
4923|Truck load matching and backhaul reduction
4923|Fleet fuel and driver behaviour telematics
4923|Cold-chain truck temperature compliance
4923|Container haulage port appointment planning
4923|Last-mile delivery route optimisation
4923|Dangerous goods transport documentation
4930|Pipeline throughput scheduling and metering
5011|Passenger ferry ticketing and manifest
5012|Coastal cargo vessel voyage costing
5021|River tourist boat booking system
5022|Barge freight scheduling on inland waterways
5110|Airline crew rostering and duty limits
5110|Flight delay prediction and passenger rebooking
5110|Airline ancillary and seat selection sales
5120|Air cargo booking and capacity management
5210|Warehouse WMS pick-path optimisation
5210|Cold storage inventory and temperature logging
5210|Bonded warehouse customs stock records
5210|Self-storage unit booking and access control
5221|Truck terminal gate and yard management
5222|Port berth allocation and vessel scheduling
5222|Container yard stacking and inventory
5223|Airport ground handling turnaround tracking
5224|Cargo handling labour and equipment dispatch
5229|Freight forwarding shipment documentation
5229|Customs clearance declaration workflow
5229|Freight rate quotation and comparison
5310|Postal counter service and mail tracking
5320|Parcel courier pickup, sorting and proof of delivery
5320|Courier rider earnings and shift management
5320|Parcel locker network management
5510|Hotel booking engine and channel manager
5510|Hotel housekeeping task assignment
5510|Guest check-in and ID verification flow
5510|Hostel dorm bed inventory management
5510|Resort dynamic pricing and occupancy forecast
5510|Serviced apartment long-stay contracts
5520|Campsite and RV park pitch reservation
5590|Staff dormitory and worker housing records
5610|Restaurant table reservation and waitlist
5610|Kitchen display and order routing
5610|Food truck location and daily sales tracking
5610|Restaurant recipe costing and menu engineering
5610|Food delivery aggregator order consolidation
5610|Cloud kitchen multi-brand order routing
5610|Buffet and street-food hygiene inspection records
5621|Event catering menu quoting and headcount
5629|Canteen and staff meal subsidy tracking
5629|School lunch nutrition planning
5630|Bar and pub stock pour-cost tracking
5630|Coffee shop loyalty and pre-order pickup
5811|Book publishing manuscript and royalty tracking
5811|Print-on-demand title catalogue management
5812|Business directory listing management
5813|Newsroom editorial workflow and scheduling
5813|Magazine subscription and circulation tracking
5819|Digital publication paywall and membership
5820|Software product release and licence management
5820|App store metadata and rating analytics
5911|Film production call sheets and shooting schedule
5911|Video production asset review and approval
5911|TV programme rundown management
5912|Post-production render queue and versioning
5913|Film distribution rights and territory tracking
5914|Cinema seat booking and showtime scheduling
5920|Music recording session and split-sheet records
5920|Music royalty collection and reporting
6010|Radio station playlist scheduling and logs
6010|Podcast production and episode publishing
6020|TV broadcast ad slot inventory and traffic
6020|OTT streaming catalogue and viewership analytics
6110|Fixed broadband installation work orders
6110|Fibre network fault ticket management
6120|Mobile subscriber plan and top-up self-service
6120|Cell site performance and outage monitoring
6120|SIM registration and KYC records
6130|Satellite bandwidth allocation management
6190|IoT connectivity SIM fleet management
6190|VoIP call quality monitoring
6201|Custom software project delivery tracking
6201|Low-code internal tool builder
6201|Legacy system migration inventory
6201|API integration monitoring and alerting
6201|Developer onboarding environment automation
6202|IT service desk ticket triage
6202|Managed IT asset and licence inventory
6202|Cloud cost visibility and optimisation
6202|Cybersecurity vulnerability tracking
6209|Data centre rack and capacity planning
6209|Backup and disaster recovery verification
6209|IT hardware repair dispatch for enterprises
6311|Web hosting account provisioning and billing
6311|Log aggregation and anomaly detection
6311|Data pipeline observability
6312|Vertical industry web portal with directory
6312|Government open-data portal front end
6391|News aggregation and fact-check workflow
6399|Business credit information reporting
6399|Company registry data enrichment
6399|Patent and trademark watch monitoring
6399|Job market salary benchmarking data
6411|Central bank statistics publication tooling
6419|Retail bank onboarding and eKYC
6419|Loan origination and credit scoring
6419|Savings cooperative member accounts
6419|Village fund lending and repayment tracking
6419|Digital wallet transaction reconciliation
6420|Holding company subsidiary reporting consolidation
6430|Mutual fund NAV publication and factsheets
6491|Equipment leasing contract and asset register
6491|Hire-purchase instalment collection tracking
6492|Nano-finance lending and collection workflow
6492|Buy-now-pay-later merchant integration
6492|Peer-to-peer lending marketplace
6499|Factoring and invoice financing platform
6499|Remittance and cross-border transfer tracking
6499|Debt restructuring case management
6511|Life insurance policy issuance and underwriting
6511|Agent recruitment and commission hierarchy
6512|Motor insurance claim FNOL and photo assessment
6512|Health insurance pre-authorisation workflow
6512|Crop insurance index-based payout calculation
6512|Travel insurance instant policy issuance
6520|Reinsurance treaty and cession accounting
6530|Provident fund member statement portal
6611|Securities exchange market data distribution
6612|Stockbroker order management and suitability
6612|Commodity futures margin monitoring
6619|Financial adviser client portfolio reporting
6621|Insurance loss adjuster survey reports
6622|Insurance broker quote comparison
6629|Insurance actuarial data preparation
6630|Asset management performance attribution
6810|Condominium juristic person fee collection
6810|Rental property tenant and lease management
6810|Land plot ownership and title document records
6810|Warehouse and factory space leasing
6820|Property agency listing and viewing scheduling
6820|Property valuation comparable database
6820|Real estate developer sales booking and contract
6820|Property management maintenance requests
6910|Law firm case and hearing date management
6910|Contract lifecycle management and clause library
6910|Legal document e-signature and notarisation records
6910|Litigation evidence and disclosure indexing
6920|Bookkeeping automation from receipts
6920|Audit working paper and sampling tool
6920|Tax filing preparation and e-tax invoicing
6920|Payroll processing and social security filing
6920|Withholding tax certificate generation
7010|Group head office KPI consolidation
7010|Corporate governance and board meeting records
7020|Management consulting engagement tracking
7020|Business process mapping and improvement tracking
7020|ESG and sustainability reporting data collection
7020|Franchise operations standard compliance audits
7110|Architectural design revision and approval flow
7110|BIM model clash detection coordination
7110|Structural calculation and drawing register
7110|MEP design load calculation tooling
7110|Land survey data processing and plotting
7120|Materials testing laboratory LIMS
7120|Non-destructive testing report management
7120|Product certification and standards compliance
7120|Vehicle inspection centre records
7120|Energy audit measurement and reporting
7210|Research grant proposal and milestone tracking
7210|Laboratory notebook and sample tracking
7210|Clinical trial data capture
7210|Agricultural variety trial data management
7220|Social survey field data collection
7220|Academic paper collaboration and review
7310|Ad campaign performance dashboard
7310|Influencer campaign brief and payout tracking
7310|Out-of-home billboard inventory booking
7310|Creative asset version approval
7320|Consumer survey panel management
7320|Mystery shopper field audit reporting
7320|Retail shelf share image analysis
7410|Graphic design studio job and asset handoff
7410|Interior design mood board and BOQ
7410|Product and packaging design revision tracking
7420|Photography studio booking and gallery delivery
7420|Event photo tagging and distribution
7490|Translation project and glossary management
7490|Business appraisal and valuation reports
7490|Recruitment headhunting candidate pipeline
7490|Franchise lead qualification tracking
7500|Veterinary clinic appointment and medical records
7500|Livestock vaccination campaign records
7500|Pet vaccination reminder and health passport
7710|Car rental fleet booking and damage records
7710|Truck rental utilisation tracking
7721|Sports and camping gear rental inventory
7722|Media disc rental catalogue records
7729|Party and costume rental scheduling
7729|Baby equipment rental subscription
7730|Construction equipment rental dispatch
7730|Event AV equipment rental and setup
7730|Medical equipment rental with usage metering
7740|IP and franchise licensing royalty tracking
7810|Job board matching and application tracking
7810|Blue-collar worker recruitment via chat
7820|Temporary staffing shift fill and timesheets
7830|Migrant worker documentation compliance
7830|Outsourced staff attendance and payroll
7911|Travel agency itinerary and booking management
7911|Visa application document checklist
7912|Tour operator group departure management
7912|Day-trip activity booking and capacity
7990|Attraction ticketing and timed entry
7990|Event ticket sales and gate scanning
8010|Security guard patrol checkpoint verification
8010|Guard shift rostering and incident reports
8020|CCTV alarm monitoring and event triage
8020|Access control card issuance and audit
8030|Investigation case file management
8110|Facility management combined service SLA tracking
8121|Office cleaning schedule and quality checks
8129|Industrial deep-cleaning job records
8130|Landscape maintenance route planning
8130|Irrigation system remote control for grounds
8211|Virtual office and business service subscriptions
8219|Document scanning and archive indexing
8220|Call centre agent performance and QA
8220|Inbound call reason analytics
8230|Conference registration and badge printing
8230|Trade show booth allocation and floor plan
8291|Debt collection contact and promise tracking
8291|Credit bureau enquiry logging
8292|Contract packing line order tracking
8299|Corporate procurement e-sourcing and bidding
8299|Vendor onboarding and due diligence
8299|Barcode and label printing service orders
8411|Local government one-stop service requests
8411|Public document e-submission workflow
8411|Civil registration and household records
8412|School and hospital oversight inspection records
8413|Business registration and licensing workflow
8413|Industrial promotion privilege application
8421|Consular appointment and case tracking
8422|Military logistics and asset accountability
8423|Police case reporting and evidence tracking
8423|Fire and rescue dispatch and resource status
8423|Disaster warning dissemination and shelter status
8423|Traffic violation e-ticketing
8430|Social security contribution and benefit claims
8430|Welfare card eligibility verification
8510|Primary school attendance and grade reporting
8510|Kindergarten daily activity and parent updates
8521|Secondary school timetable and exam scheduling
8521|Student behaviour and counselling records
8522|Vocational training workshop and skill assessment
8530|University course registration and credits
8530|Thesis submission and plagiarism screening
8530|Alumni engagement and donation tracking
8541|Sports academy training programme tracking
8542|Music and art school lesson scheduling
8549|Language school placement testing
8549|Online course platform with progress tracking
8549|Corporate training LMS and certification
8549|Exam preparation adaptive practice
8550|Education aid and scholarship application review
8550|School bus and canteen support services admin
8610|Hospital OPD queue and appointment management
8610|Inpatient bed allocation and discharge planning
8610|Operating theatre scheduling
8610|Hospital drug inventory and dispensing
8610|Medical record retrieval and coding
8610|Telemedicine consultation with e-prescription
8610|Nurse rostering and workload balancing
8620|Dental clinic treatment plan and imaging
8620|GP clinic patient history and referrals
8620|Aesthetic clinic course package tracking
8690|Medical laboratory sample tracking and results
8690|Radiology image reporting workflow
8690|Physiotherapy programme and progress tracking
8690|Ambulance dispatch and pre-hospital records
8690|Blood donation drive and stock management
8690|Traditional Thai massage and therapy records
8710|Nursing home resident care planning
8720|Mental health and rehab programme tracking
8730|Elderly day-care and home visit scheduling
8730|Fall detection monitoring for elderly homes
8790|Orphanage and shelter case records
8810|Community elderly care volunteer coordination
8810|Disability support equipment lending
8890|Food bank donation and distribution tracking
8890|NGO beneficiary case management
8890|Child protection referral tracking
9000|Theatre production rehearsal and cast scheduling
9000|Artist portfolio and commission management
9000|Concert stage production logistics
9000|Talent agency booking and contract tracking
9000|Art gallery exhibition and sales records
9000|Craft artisan marketplace with provenance
9101|Library circulation and reservation system
9101|Digital archive metadata cataloguing
9102|Museum collection condition monitoring
9102|Heritage site visitor flow management
9102|Temple and historical site donation records
9103|Zoo animal husbandry and feeding records
9103|National park entry permits and trail capacity
9103|Botanical garden plant collection labelling
9200|Licensed lottery agent stock reconciliation
9200|Responsible gaming self-exclusion registry
9311|Sports facility court booking
9311|Stadium event day operations and access
9312|Football club membership and match ticketing
9312|Fitness gym membership and class booking
9319|Amateur league fixture and results management
9319|Running event registration and timing
9319|E-sports tournament bracket management
9321|Theme park ride wait-time and maintenance
9321|Water park locker and safety patrol records
9329|Karaoke and entertainment venue room booking
9329|Escape room and activity venue scheduling
9329|Beach and water sports rental safety logs
9411|Chamber of commerce member services portal
9412|Professional licence CPD credit tracking
9420|Labour union membership and grievance records
9491|Temple and mosque activity and merit records
9492|Political campaign volunteer coordination
9499|Alumni and community association events
9499|Village committee meeting and fund records
9511|Computer repair shop job intake and parts
9512|Mobile phone repair queue and warranty
9521|Consumer electronics repair spare-part lookup
9522|Home appliance repair technician dispatch
9523|Shoe and leather repair order tracking
9524|Furniture restoration project records
9529|Watch and jewellery repair intake
9601|Laundry and dry-cleaning pickup and delivery
9601|Coin laundry machine telemetry and payment
9602|Salon appointment booking and stylist commission
9602|Barbershop queue and loyalty
9602|Nail and spa treatment package tracking
9603|Funeral service arrangement and ceremony planning
9603|Cemetery and columbarium plot records
9609|Pet grooming and boarding scheduling
9609|Tattoo studio booking and aftercare
9609|Fortune telling and horoscope consultation booking
9609|Personal errand and concierge task dispatch
9700|Domestic helper agency placement records
9700|Household payroll and social security for helpers
9810|Home garden produce sharing among neighbours
9820|Household chore and family task coordination
9900|International organisation project grant tracking
9900|Embassy event and visitor coordination
9900|Cross-border aid logistics coordination
9900|UN programme field reporting
0111|Crop rotation planning for soil health
0112|Community rice mill membership and quota
0113|Farmers market pre-order for vegetable boxes
0122|Orchard labour crew payroll by piece rate
0126|Palm fruit ripeness grading at collection points
0127|Coffee shop-to-farm direct sourcing records
0129|Rubber sheet auction price transparency
0141|Cattle auction market weighing and bidding
0145|Pig price index and contract settlement
0146|Poultry contract farming settlement statements
0149|Silkworm rearing and cocoon quality records
0161|Farm input credit and repayment tracking
0163|Cold room booking for smallholder produce
0210|Community forest boundary mapping
0311|Fisher cooperative fuel subsidy claims
0321|Shrimp feed cost and FCR benchmarking
0322|Fish fry ordering and delivery scheduling
0810|Aggregate delivery ticketing to construction sites
0910|Rig personnel certification and travel logistics
1010|Meat cold-chain retail shelf-life prediction
1020|Fishing vessel to plant catch documentation
1030|Contract farming quality rejection analysis
1050|Milk collection centre volume and fat testing
1061|Rice export shipment documentation
1071|Bakery ingredient allergen labelling
1075|Meal kit subscription production planning
1079|Food export certificate of origin workflow
1080|Feed mill raw material price hedging records
1104|Water delivery route and bottle deposit tracking
1311|Cotton lot moisture and contamination records
1410|Garment order costing and margin analysis
1410|Sewing subcontractor quality scorecards
1520|Shoe factory sample approval and grading
1610|Wood moisture content monitoring in kilns
1622|Door and window manufacturing order tracking
1702|Packaging material waste and trim reduction
1811|Print shop customer self-service ordering
2011|Chemical safety data sheet management
2023|Cosmetic ingredient regulatory screening
2100|Pharmacy supply chain serialisation
2220|Plastic scrap regrind blending records
2394|Cement dispatch truck GPS and delivery proof
2410|Steel yard crane and stock location tracking
2610|Electronics component shortage substitution
2620|Warranty repair depot logistics
2720|Battery second-life grading records
2750|Appliance spare-part reverse logistics
2910|Vehicle recall campaign execution tracking
2930|Just-in-sequence supplier delivery windows
3100|Furniture showroom AR placement preview
3211|Gold shop daily price and buy-back records
3250|Hospital instrument sterilisation tracking
3312|Machine operator training and certification
3320|Factory relocation asset move planning
3510|Household electricity usage insight app
3510|Substation asset condition monitoring
3510|Solar panel soiling and cleaning schedule
3520|Gas cylinder retail order-by-chat
3600|Water bill payment and usage alerts
3700|Community wastewater fee collection
3811|Waste truck weighbridge and tipping fees
3830|Deposit-return scheme redemption tracking
4100|Home renovation contractor marketplace
4100|Construction material waste tracking on site
4100|Worker skill certification for site entry
4210|Road roughness survey from vehicle sensors
4220|Utility strike prevention with buried asset maps
4321|Solar rooftop installation job tracking
4330|Handover snag reporting for new homes
4390|Site security and equipment theft monitoring
4510|Vehicle registration and transfer paperwork
4520|Car service appointment reminders by mileage
4530|Counterfeit parts detection and reporting
4540|Motorcycle taxi cooperative fee collection
4620|Contract farming buyer-farmer matching
4630|Restaurant supply ordering from wholesalers
4649|FMCG distributor van sales settlement
4652|Telecom project material staging records
4663|Steel and cement site delivery scheduling
4711|Store planogram compliance photo checks
4711|Neighbourhood store credit ledger digitisation
4721|Halal food sourcing verification for stores
4730|Fuel price board and margin monitoring
4741|Phone trade-in grading and pricing
4759|Furniture delivery slot self-booking
4772|Controlled drug dispensing audit trail
4773|Agricultural supply shop crop advisory
4774|Refurbished electronics grading marketplace
4781|Food stall hygiene self-assessment
4791|Return and refund reverse logistics
4791|COD collection reconciliation for sellers
4791|Product content and image bulk management
4799|Community group buying coordination
4911|Rail station accessibility service requests
4921|Bus fleet electrification charging schedule
4922|Driver licence and vehicle document expiry alerts
4923|Weighbridge overload compliance records
4923|Driver hours and fatigue monitoring
5012|Port to inland barge shipment tracking
5110|Aircraft maintenance defect deferral tracking
5120|Perishable air cargo temperature compliance
5210|Inventory cycle counting and stock accuracy
5210|Pallet and returnable asset tracking
5222|Ship agency port call cost estimation
5229|Duty and tax calculation for imports
5320|Delivery address quality and geocoding
5510|Hotel energy and water consumption tracking
5510|Guest feedback and review response workflow
5610|Restaurant staff scheduling by demand forecast
5610|Ingredient shelf-life and waste logging
5630|Beverage menu costing and pour tracking
5811|Textbook adoption and distribution tracking
5813|Local news community reporting platform
5820|Software subscription churn analytics
5911|Location scouting and permit management
5920|Independent artist release and revenue tracking
6010|Radio advertising booking self-service
6020|Broadcast rights and content compliance logging
6110|Broadband service quality complaint analytics
6120|Prepaid airtime dealer distribution
6201|Bug triage and release readiness tracking
6201|Technical documentation site generation
6202|Endpoint compliance and patch reporting
6209|On-premise to cloud migration inventory
6311|Uptime status page and incident comms
6312|Community forum with expert Q&A
6399|Public procurement tender monitoring
6419|Branch queue and teller performance
6419|Loan collateral appraisal workflow
6492|Agricultural loan seasonal repayment scheduling
6499|Cooperative share and dividend management
6512|Fleet insurance risk scoring from telematics
6512|Fraudulent claim pattern detection
6622|Insurance renewal reminder and cross-sell
6810|Land use change and encroachment monitoring
6810|Rental deposit and dispute records
6820|Co-working space booking and access
6910|Legal aid intake and case triage
6920|SME cash flow and receivable ageing
6920|Expense claim approval with receipt capture
7010|Intercompany transaction reconciliation
7020|OKR and strategy execution tracking
7020|Carbon footprint calculation for SMEs
7110|Site inspection report generation from photos
7110|Engineering drawing revision control
7120|Calibration due-date tracking for instruments
7120|Food safety lab testing turnaround tracking
7210|Field research sample geotagging
7220|Community survey data validation
7310|Local SEO and listing consistency management
7320|Price monitoring across competitor channels
7410|Brand asset guideline compliance checking
7420|Drone photography flight permission records
7490|Interpreter assignment for hospitals and courts
7500|Livestock disease surveillance reporting
7710|Motorcycle rental for tourists with damage evidence
7730|Generator and pump rental service intervals
7810|Skills assessment testing for candidates
7820|Daily labour matching for factories
7911|Group tour payment collection and splitting
7912|Tour guide licensing and assignment
7990|Homestay booking for community tourism
8010|Visitor pre-registration and gate pass
8020|Fire alarm system inspection records
8110|Building energy management and BMS alarms
8121|Cleaning consumable stock replenishment
8130|Tree inventory and pruning schedules
8220|Chat support routing with knowledge base
8230|Event attendee engagement and lead capture
8292|Gift wrapping and kitting order management
8299|Contract review turnaround tracking
8411|Municipal complaint hotline case routing
8411|Public asset register and maintenance
8413|SME support programme application review
8423|Community CCTV incident reporting
8423|Flood water level monitoring and alerts
8430|Pension eligibility calculation portal
8510|School fee collection and receipts
8521|Parent-teacher communication channel
8522|Apprenticeship placement tracking
8530|Research output and citation reporting
8541|Youth sports talent development records
8549|Driving school lesson and test booking
8549|Skill certification exam scheduling
8550|Student loan application and disbursement
8610|Hospital referral network coordination
8610|Medical equipment maintenance scheduling
8620|Clinic insurance claim submission
8690|Home health visit scheduling and notes
8690|Vaccination campaign record and certificates
8690|Chronic disease remote monitoring
8710|Care staff shift and medication rounds
8730|Elderly meal delivery coordination
8890|Volunteer hour tracking and recognition
9000|Cultural performance troupe booking
9101|Community reading room lending records
9102|Artifact loan and exhibition logistics
9103|Wildlife sighting and conservation reporting
9311|Public sports field allocation for communities
9312|Youth academy attendance and fee tracking
9319|Marathon volunteer and route logistics
9321|Season pass and membership access control
9329|Board game cafe table and inventory
9412|Continuing education seminar registration
9499|Neighbourhood security volunteer roster
9511|Refurbished PC donation programme tracking
9512|Repair parts pricing and availability lookup
9522|Air conditioner cleaning service scheduling
9601|Hotel linen laundry volume tracking
9602|Beauty product usage and treatment history
9603|Funeral fund mutual aid contribution records
9609|Home cleaning service quality feedback
9609|Motorbike delivery rider gig scheduling
9700|Domestic worker training and placement
9820|Family caregiving schedule coordination
9900|International volunteer programme placement
0113|Mushroom growing house humidity control
0146|Duck and quail farm production records
0322|Crab and shellfish farm harvest planning
1030|Dried fruit and vegetable snack production
1071|Cake custom order and decoration scheduling
1391|Sock and glove knitting production records
1520|Sandal and slipper production planning
2220|Plastic packaging mould change scheduling
2593|Agricultural hand tool production records
2630|Router and set-top box production testing
2818|Garden tool assembly line records
3100|Office furniture project delivery scheduling
3230|Muay Thai equipment production and orders
3290|Umbrella and rain gear production records
3520|Biomass pellet fuel production tracking
3830|Used cooking oil collection for biodiesel
4100|Temple and public building restoration projects
4290|Coastal erosion protection works monitoring
4520|Mobile roadside assistance dispatch
4649|Toy and stationery wholesale seasonal orders
4711|Store opening checklist and audit
4771|Uniform bulk order fulfilment for schools
4791|Flash sale inventory allocation
4923|Household moving service quotation
5510|Boutique hotel direct booking upsell
5610|Halal and vegetarian menu labelling
5820|Mobile app crash and release health tracking
6120|Roaming usage and billing dispute handling
6201|Accessibility audit tracking for websites
6419|Anti-money-laundering alert investigation
6512|Motorcycle insurance micro-policy sales
6810|Land title deed collateral verification
6920|Franchise royalty calculation and reporting
7020|Family business succession documentation
7110|Solar irradiance site assessment reports
7310|QR-based print campaign attribution
7500|Aquatic animal health inspection records
8299|Office supplies subscription replenishment
8411|Village headman activity and reporting
8610|Emergency room triage and bed status
8690|Mobile health unit rural outreach records
9319|Community sports equipment lending
9602|Freelance makeup artist booking
`;
