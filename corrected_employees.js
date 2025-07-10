// Corrected SnapLogic Employee Data with proper regional and functional assignments
const SNAPLOGIC_EMPLOYEES_CORRECTED = [
  // Executive Team
  {"name": "Gaurav Dhillon", "region": "North America", "function": "Executive", "team": "CEO Office", "location": "San Mateo, CA", "title": "Chief Executive Officer"},
  {"name": "Colleen Carroll", "region": "North America", "function": "Executive", "team": "CEO Office", "location": "San Mateo, CA", "title": "Chief of Staff to the CEO"},
  {"name": "Kathy Daw", "region": "North America", "function": "Executive", "team": "CEO Office", "location": "San Mateo, CA", "title": "Special Assistant, Office of the CEO"},

  // David Lee - Sales Organization
  {"name": "David Lee", "region": "North America", "function": "Sales", "team": "Sales Leadership", "location": "Remote (CA)", "title": "Chief Sales Officer"},
  
  // Sales - Field Sales East
  {"name": "Jennifer Bentley", "region": "North America", "function": "Sales", "team": "Field Sales", "location": "Remote (MA)", "title": "RVP, Sales East AMER"},
  {"name": "Ben Spaeth", "region": "North America", "function": "Sales", "team": "Field Sales", "location": "Remote (NJ)", "title": "Enterprise Account Executive"},
  {"name": "Aaron Rice", "region": "North America", "function": "Sales", "team": "Field Sales", "location": "Remote (IL)", "title": "Enterprise Account Executive"},
  {"name": "Kathy Hauser", "region": "North America", "function": "Sales", "team": "Field Sales", "location": "Remote (NC)", "title": "Enterprise Account Executive"},
  {"name": "Josh Roche", "region": "North America", "function": "Sales", "team": "Field Sales", "location": "Remote (CT)", "title": "Enterprise Account Executive"},
  {"name": "Bruce Spake", "region": "North America", "function": "Sales", "team": "Field Sales", "location": "Remote (MD)", "title": "Associate Enterprise Account Executive"},
  {"name": "Jared Giorgio", "region": "North America", "function": "Sales", "team": "Field Sales", "location": "San Mateo, CA", "title": "Associate Enterprise Account Executive"},

  // Sales - Field Sales West
  {"name": "Doug Merrill", "region": "North America", "function": "Sales", "team": "Field Sales", "location": "Remote (CA)", "title": "RVP, Sales West AMER"},
  {"name": "Kelsie Neibel", "region": "North America", "function": "Sales", "team": "Field Sales", "location": "Remote (CA)", "title": "Enterprise Account Executive"},
  {"name": "Vivek Seth", "region": "North America", "function": "Sales", "team": "Field Sales", "location": "Remote (WA)", "title": "Enterprise Account Executive"},
  {"name": "Jordan Miller", "region": "North America", "function": "Sales", "team": "Field Sales", "location": "Remote (CA)", "title": "Enterprise Account Executive"},
  {"name": "Shelly Carroll", "region": "North America", "function": "Sales", "team": "Field Sales", "location": "Remote (TX)", "title": "Enterprise Account Executive"},

  // Sales - EMEA
  {"name": "Timothy Harris", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "London, UK", "title": "Global Account Director"},
  {"name": "Sebastian Flach", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "Remote (Germany)", "title": "RVP, Sales DACH"},
  {"name": "Nick Pike", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "London, UK", "title": "RVP Sales, Northern Europe"},
  {"name": "Pascal Bouche", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "Remote (France)", "title": "RVP Sales, Southern Europe"},
  {"name": "Phillip Mattu", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "London, UK", "title": "Enterprise Account Executive"},
  {"name": "Amaury Guinot", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "Remote (France)", "title": "Enterprise Account Executive"},
  {"name": "Sean O'Meara", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "Remote (Germany)", "title": "Enterprise Account Executive"},
  {"name": "Daniil Kalyadin", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "London, UK", "title": "Enterprise Account Executive"},
  {"name": "Mitchell Read", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "London, UK", "title": "Enterprise Account Executive"},
  {"name": "Chiara Busini", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "Remote (Spain)", "title": "Enterprise Account Executive"},
  {"name": "Christian Gollwitzer", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "Remote (Germany)", "title": "Enterprise Account Executive"},
  {"name": "Miles Eakers", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "London, UK", "title": "Enterprise Account Executive"},
  {"name": "Nicolas Chahoud", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "Remote (France)", "title": "Enterprise Account Executive"},
  {"name": "Kristian Sablic", "region": "EMEA", "function": "Sales", "team": "Sales EMEA", "location": "Remote (Germany)", "title": "Enterprise Account Executive"},

  // Sales - APAC
  {"name": "John Cazanis", "region": "APAC", "function": "Sales", "team": "Sales APAC", "location": "Melbourne, AUS", "title": "Enterprise Account Executive"},

  // Sales - Inside Sales
  {"name": "Jason Christensen", "region": "North America", "function": "Sales", "team": "Inside Sales", "location": "Remote (UT)", "title": "Business Development Representative"},
  {"name": "Nick Linsmayer", "region": "North America", "function": "Sales", "team": "Inside Sales", "location": "Remote (CA)", "title": "Associate Inside Sales Account Executive"},
  {"name": "Sid Shah", "region": "North America", "function": "Sales", "team": "Inside Sales", "location": "Remote (UT)", "title": "Business Development Representative"},
  {"name": "Anthony Hunt", "region": "North America", "function": "Sales", "team": "Inside Sales", "location": "Remote (UT)", "title": "Inside Sales Account Executive"},
  {"name": "Ian Mershon", "region": "North America", "function": "Sales", "team": "Inside Sales", "location": "Remote (UT)", "title": "Business Development Representative"},
  {"name": "Caleb Howard", "region": "North America", "function": "Sales", "team": "Inside Sales", "location": "Remote (UT)", "title": "Business Development Representative"},

  // Sales Engineering/Presales under Sales
  {"name": "Ravi Krishnan", "region": "North America", "function": "Sales", "team": "Sales Engineering", "location": "Remote (CA)", "title": "Head of Solution Engineering, AMER"},
  {"name": "Jocelyn Arcega", "region": "EMEA", "function": "Sales", "team": "Sales Engineering", "location": "London, UK", "title": "Head of Solutions Engineering, EMEA"},
  {"name": "Lindsey Laurune", "region": "North America", "function": "Sales", "team": "Sales Engineering", "location": "Remote (NY)", "title": "Solutions Engineer"},
  {"name": "Bhavin Patel", "region": "North America", "function": "Sales", "team": "Sales Engineering", "location": "Remote (IL)", "title": "Principal Solutions Engineer"},
  {"name": "Dylan Vetter", "region": "North America", "function": "Sales", "team": "Sales Engineering", "location": "Remote (VA)", "title": "Solutions Engineer"},
  {"name": "Roger Stanikoski", "region": "North America", "function": "Sales", "team": "Sales Engineering", "location": "Remote (VT)", "title": "Sr. Solutions Engineer"},
  {"name": "Jordan Millhausen", "region": "North America", "function": "Sales", "team": "Sales Engineering", "location": "Remote (MD)", "title": "Solutions Engineer"},
  {"name": "Corey Swerdloff", "region": "North America", "function": "Sales", "team": "Sales Engineering", "location": "Remote (NC)", "title": "Sr. Solutions Engineer"},
  {"name": "Brad Drysdale", "region": "APAC", "function": "Sales", "team": "Sales Engineering", "location": "Sydney, AUS", "title": "Principal Solutions Engineer"},
  {"name": "Matt Sager", "region": "North America", "function": "Sales", "team": "Sales Engineering", "location": "Remote (MA)", "title": "Principal Solutions Engineer"},

  // Sales Operations under Sales
  {"name": "Michael Pap Rocki", "region": "North America", "function": "Sales", "team": "Sales Operations", "location": "San Mateo, CA", "title": "VP, Revenue Operations and Strategic Growth"},
  {"name": "Aidan Murphy", "region": "North America", "function": "Sales", "team": "Sales Operations", "location": "Remote (NC)", "title": "Sr. Revenue Operations Manager"},
  {"name": "Alda Borden", "region": "North America", "function": "Sales", "team": "Sales Operations", "location": "San Mateo, CA", "title": "Deal Desk Director"},
  {"name": "Christopher Barton", "region": "EMEA", "function": "Sales", "team": "Sales Operations", "location": "London, UK", "title": "Sales Operations Manager"},
  {"name": "Randa Magrino", "region": "North America", "function": "Sales", "team": "Sales Operations", "location": "New York, NY", "title": "Deal Desk Manager"},
  {"name": "Dan Smith", "region": "North America", "function": "Sales", "team": "Sales Operations", "location": "San Mateo, CA", "title": "Sales Operations Manager"},

  // Channel Sales under Sales
  {"name": "Danielle Carty", "region": "North America", "function": "Sales", "team": "Channel Sales", "location": "Remote (Canada)", "title": "Global VP, Channels"},
  {"name": "Catherine Delaunay", "region": "EMEA", "function": "Sales", "team": "Channel Sales", "location": "Remote (France)", "title": "Channel Sales Director Central EMEA"},
  {"name": "Adam Nash", "region": "EMEA", "function": "Sales", "team": "Channel Sales", "location": "London, UK", "title": "Channel Sales Director Northern Europe"},
  {"name": "Rachel Harrington", "region": "North America", "function": "Sales", "team": "Channel Sales", "location": "Remote (MI)", "title": "Channel Sales Director East NA"},
  {"name": "Liz Andrew", "region": "North America", "function": "Sales", "team": "Channel Sales", "location": "Remote (Canada)", "title": "Global GSI Director"},
  {"name": "Victor Bishay", "region": "North America", "function": "Sales", "team": "Channel Sales", "location": "Remote (Canada)", "title": "Cloud Partnerships Director"},
  {"name": "Roland Mackert", "region": "EMEA", "function": "Sales", "team": "Channel Sales", "location": "Remote (Germany)", "title": "Channel Sales Director, DACH"},

  // Jeremiah Stone - Engineering Organization
  {"name": "Jeremiah Stone", "region": "North America", "function": "Engineering", "team": "Engineering Leadership", "location": "San Mateo, CA", "title": "Chief Technology Officer"},
  {"name": "Greg Benson", "region": "North America", "function": "Engineering", "team": "Engineering Leadership", "location": "San Mateo, CA", "title": "Chief Scientist"},
  {"name": "Anju Schiller", "region": "North America", "function": "Engineering", "team": "Engineering Leadership", "location": "San Mateo, CA", "title": "VP, Engineering"},

  // Platform Engineering
  {"name": "Jigish Patel", "region": "North America", "function": "Engineering", "team": "Platform", "location": "Remote (NJ)", "title": "Director, Software Engineering"},
  {"name": "Cole Howard", "region": "North America", "function": "Engineering", "team": "Platform", "location": "Remote (CA)", "title": "Sr. Manager, Software Engineering I"},
  {"name": "Tim Ellis", "region": "North America", "function": "Engineering", "team": "Platform", "location": "Remote (MA)", "title": "Sr. Principal Engineer"},
  {"name": "Terry Tran", "region": "North America", "function": "Engineering", "team": "Platform", "location": "San Mateo, CA", "title": "Sr. Software Engineer"},
  {"name": "Dave Gan", "region": "North America", "function": "Engineering", "team": "Platform", "location": "San Mateo, CA", "title": "Staff Software Engineer"},

  // Core Engineering
  {"name": "Jump Ananpiriyakul", "region": "North America", "function": "Engineering", "team": "Core Engineering", "location": "San Mateo, CA", "title": "Director, Software Engineering"},
  {"name": "Luna Wang", "region": "North America", "function": "Engineering", "team": "Core Engineering", "location": "San Mateo, CA", "title": "Software Engineer"},
  {"name": "Shumin Zhang", "region": "North America", "function": "Engineering", "team": "Core Engineering", "location": "San Mateo, CA", "title": "Software Engineer"},

  // Snaps Engineering
  {"name": "Sankar Manoharan", "region": "North America", "function": "Engineering", "team": "Snaps", "location": "San Mateo, CA", "title": "Director, Software Engineering"},
  {"name": "Matthew Bowen", "region": "North America", "function": "Engineering", "team": "Snaps", "location": "San Mateo, CA", "title": "Sr. Software Engineer"},
  {"name": "Rohith Madhavan", "region": "North America", "function": "Engineering", "team": "Snaps", "location": "San Mateo, CA", "title": "Sr. Staff Software Engineer"},

  // Data Products Engineering
  {"name": "Prathyusha Kanala", "region": "North America", "function": "Engineering", "team": "Data Products", "location": "San Mateo, CA", "title": "Manager, Software Engineering II"},
  {"name": "Patrick Taylor", "region": "North America", "function": "Engineering", "team": "Data Products", "location": "Remote (CO)", "title": "Sr. Principal SW Engineer"},

  // Quality Assurance under Engineering
  {"name": "Namita Prabhu", "region": "North America", "function": "Engineering", "team": "Quality Assurance", "location": "San Mateo, CA", "title": "Sr. Director, QA"},
  {"name": "Anton Samsonov", "region": "North America", "function": "Engineering", "team": "Quality Assurance", "location": "San Mateo, CA", "title": "Sr. Quality Engineer"},
  {"name": "Ajeesh Varghese", "region": "North America", "function": "Engineering", "team": "Quality Assurance", "location": "San Mateo, CA", "title": "QA Architect"},

  // Infrastructure under Engineering
  {"name": "Alex Wong", "region": "North America", "function": "Engineering", "team": "Infrastructure", "location": "San Mateo, CA", "title": "Director, Infrastructure Eng & Operations"},
  {"name": "Karthik Birdiga navile", "region": "North America", "function": "Engineering", "team": "Infrastructure", "location": "Remote (MA)", "title": "Manager, Infrastructure Engineering"},

  // Thai Engineering Team
  {"name": "Thanawut (Jump) Ananpiriyakul", "region": "APAC", "function": "Engineering", "team": "Thailand Engineering", "location": "Thailand", "title": "Director, Software Engineering"},
  {"name": "Lertsak (Kui) Ananpiriyakul", "region": "APAC", "function": "Engineering", "team": "Thailand Engineering", "location": "Thailand", "title": "General Manager"},

  // Dayle Hall - Marketing Organization
  {"name": "Dayle Hall", "region": "North America", "function": "Marketing", "team": "Marketing Leadership", "location": "San Mateo, CA", "title": "Chief Marketing Officer"},
  {"name": "Tim White", "region": "North America", "function": "Marketing", "team": "Corporate Marketing", "location": "San Mateo, CA", "title": "VP, Corporate Marketing"},
  {"name": "Nuala Coogan", "region": "North America", "function": "Marketing", "team": "Field Marketing", "location": "San Mateo, CA", "title": "Sr. Director, Global Field Marketing"},
  {"name": "Julie Branthomme", "region": "EMEA", "function": "Marketing", "team": "Field Marketing", "location": "Remote (France)", "title": "Director, Field Marketing EMEA"},
  {"name": "Praneal Narayan", "region": "North America", "function": "Marketing", "team": "Solutions Marketing", "location": "San Mateo, CA", "title": "Sr. Director, Solutions Marketing"},

  // Vaikom Krishnan - Product Organization
  {"name": "Vaikom Krishnan", "region": "North America", "function": "Product", "team": "Product Leadership", "location": "San Mateo, CA", "title": "Chief Product Officer"},
  {"name": "Manish Rai", "region": "North America", "function": "Product", "team": "Product Marketing", "location": "San Mateo, CA", "title": "VP, Product Marketing"},
  {"name": "Mark Gibbs", "region": "North America", "function": "Product", "team": "Product Management", "location": "San Mateo, CA", "title": "VP, Product Management"},
  {"name": "Matthew Holloway", "region": "North America", "function": "Product", "team": "Design", "location": "Remote (WA)", "title": "Global Head of Design"},

  // Professional Services (under Product)
  {"name": "Karthik Bandi", "region": "North America", "function": "Product", "team": "Professional Services", "location": "Remote (TX)", "title": "VP, Global Professional Services"},
  {"name": "Steve Clarke", "region": "EMEA", "function": "Product", "team": "Professional Services", "location": "London, UK", "title": "Principal Enterprise Architect"},
  {"name": "Christopher Ward", "region": "EMEA", "function": "Product", "team": "Professional Services", "location": "London, UK", "title": "AI Center of Enablement (COE) Director"},

  // Anjana Kashyap - Customer Success Organization
  {"name": "Anjana Kashyap", "region": "North America", "function": "Customer Success", "team": "Customer Success Leadership", "location": "San Mateo, CA", "title": "SVP, Customer Success"},
  {"name": "Kyle Guiao", "region": "North America", "function": "Customer Success", "team": "Customer Success", "location": "Remote (CA)", "title": "Customer Excellence Program Director"},
  {"name": "Jacques Groleau", "region": "North America", "function": "Customer Success", "team": "Customer Success", "location": "Remote (SC)", "title": "Director, Customer Success North America"},
  {"name": "Maria Hercules", "region": "EMEA", "function": "Customer Success", "team": "Customer Success", "location": "London, UK", "title": "Director, Customer Success EMEA"},

  // Technical Support under Customer Success
  {"name": "Ganesh Mekala", "region": "North America", "function": "Customer Success", "team": "Technical Support", "location": "San Mateo, CA", "title": "Sr. Director, Global Support"},
  {"name": "Atul Pande", "region": "North America", "function": "Customer Success", "team": "Technical Support", "location": "San Mateo, CA", "title": "Manager, Technical Support West II"},
  {"name": "Rob Vazzana", "region": "North America", "function": "Customer Success", "team": "Technical Support", "location": "Remote (MA)", "title": "Manager, Technical Support East II"},

  // Cassie Capano - People Organization
  {"name": "Cassie Capano", "region": "North America", "function": "People", "team": "People Leadership", "location": "San Mateo, CA", "title": "VP, People"},
  {"name": "Winnie Wong", "region": "North America", "function": "People", "team": "People Operations", "location": "San Mateo, CA", "title": "Director, People"},
  {"name": "Alexis Piper", "region": "North America", "function": "People", "team": "People Operations", "location": "Remote (CA)", "title": "People Success Partner"},

  // Ahsan Malik - Finance/Operations Organization
  {"name": "Ahsan Malik", "region": "North America", "function": "Operations", "team": "Finance Leadership", "location": "San Mateo, CA", "title": "Chief Financial Officer"},
  {"name": "Jack Tang", "region": "North America", "function": "Operations", "team": "Finance", "location": "San Mateo, CA", "title": "Sr. Director, Strategic Finance"},
  {"name": "AJ Patel", "region": "North America", "function": "Operations", "team": "Finance", "location": "San Mateo, CA", "title": "Sr. Director, Go To Market Finance"},
  {"name": "Frank Huang", "region": "North America", "function": "Operations", "team": "Accounting", "location": "San Mateo, CA", "title": "VP, Accounting"},
  {"name": "Joe Minutoli", "region": "North America", "function": "Operations", "team": "Legal", "location": "San Mateo, CA", "title": "Head of Legal"},

  // IT & Security under Operations
  {"name": "Scott Monteith", "region": "North America", "function": "Operations", "team": "IT & Security", "location": "Remote (NV)", "title": "Director, IT & Security"},
  {"name": "Kwame Oduro", "region": "North America", "function": "Operations", "team": "IT & Security", "location": "Remote (IL)", "title": "Security Analyst"},
  {"name": "Marna Strauss", "region": "EMEA", "function": "Operations", "team": "IT & Security", "location": "London, UK", "title": "Global Lead Security Engineer"}
];