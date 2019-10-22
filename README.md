# DrawIOlmatro
DrawIOlmatro is my DrawIO LAB
_
191022_17h30-DrawIO-fork-branch-publish_to_pages
-
diagram: https://drive.google.com/file/d/1XouUW8P9IAF4uE8nd9eXsi3euff5Ik3x/view?usp=sharing
_
ABSTRACT:
_
a l'usage des Utilisateurs de GITHUB et de forked DRAW.IO dans une BRANCH gh-pages
pour etre publié sur une GITHUB page dans le domaine github.io
_
SEQUENTIAL:
_
_
INPUT:
Depot Original de draw.io :
URL = https://github.com/jgraph/drawio
_
_
INTERMEDIATE:
Depot de OLMATRO: 
URL = https://github.com/Olmatro?tab=repositories
FORK de DrawIO dans Depot de OLMATRO:
MASTER BRANCH
URL = https://github.com/Olmatro/drawio
_
_
INTERMEDIATE to WEB Page publication:
_
INTERMEDIATE MASTER BRANCH -> publication BRANCH:
_
MASTER BRANCH
URL = https://github.com/Olmatro/drawio
->
gh-pages BRANCH
URL = https://github.com/Olmatro/drawio/tree/gh-pages
_
_
GITHUB.com automatic WEB Page publication -> GITHUB.io
_
GITHUB.com
automatic WEB Page publication 
-> GITHUB.io at the creation of gh-pages BRANCH
URL = https://olmatro.github.io/drawio/
README.md of gh-pages BRANCH is showed as DEFAULT "index" page
_
_
to start DrawIO WEBapp from gh-pages BRANCH :
_
 - type the URL : https://olmatro.github.io/drawio/src/main/webapp/index.html
  in the WEB Browser Window/Tab address Bar ;
_
 -> you will get an "Offline MODE" DrawIO instance to start working without DRIVE integration
   nor any INTEGRATION nor GITHUB himself !
_
_
NEXT MILESTONES :
_
_
 - install and run DrawIO PlugIns from https://olmatro.github.io/drawio/src/main/webapp
_
_
_  We assume that each and every reference to https://olmatro.github.io/drawio/src/main/webapp
  refers to gh-pages BRANCH files, commits and pull-requests.
_
_
 - modify one DrawIO PlugIn from https://olmatro.github.io/drawio/src/main/webapp
  ( TEXT plugin ?) code
  then run DrawIO modified PlugIn from https://olmatro.github.io/drawio/src/main/webapp to evaluation ;
_
_
 - create one new DrawIO PlugIn into https://olmatro.github.io/drawio/src/main/webapp
  then install & run DrawIO newly created PlugIn from https://olmatro.github.io/drawio/src/main/webapp to evaluation ;
_
_
_
