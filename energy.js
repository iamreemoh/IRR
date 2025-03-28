let lastScrollTop = 0; // Keep track of the last scroll position
const navbar = document.querySelector('.navbar');

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Toggle navigation menu on click
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active'); // Toggle hamburger to X
});

window.addEventListener('scroll', function() {

  // Check if we are on mobile
  if (window.innerWidth <= 768) {
    const scrollPos = window.scrollY;
    const section = document.querySelector('.full-screen-section'); 
    // Move the background horizontally based on scroll position
    section.style.backgroundPosition = `center ${50 + scrollPos * 0.1}%`; // Adjust multiplier for speed
  }

  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // User is scrolling down
    navbar.classList.add('scrolled');  // Add 'scrolled' class to move navbar to top
  } else {
    // User is scrolling up
    if (currentScroll <= 0) {
      navbar.classList.remove('scrolled'); // Remove 'scrolled' class to move navbar back to bottom
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll position
});

document.addEventListener("DOMContentLoaded", () => {
    const servicesData = [
      {
        id: "energy",
        title: "Energieberatung",
        description: "Ob sie nun ein Wohngebäude oder eine Gewerbeimmobilie energetisch sanieren oder errichten möchten, es ist immer besonders wichtig den Blick für das Ganze zu behalten. Verlieren sie sich nicht in Details und Überdifferenzierungen, sondern planen sie einfach und strukturiert, ohne dabei den Blick auf die Folgen der Art der Ausführung außer Acht zu lassen. Schließlich geht es nicht nur um die Umsetzung ihrer Sanierungsmaßnahmen und den Gebäude-Energieausweis. Der Werterhalt ihrer Immobilie ist genauso wichtig. Aus diesem Grund erstellen wir ihnen auch auf Wunsch die Lebenszyklus Analyse LCA. Dabei geht es nicht nur um die Einsparung von Treibhausgasen und den Zugang zu Fördermitteln. Durch diese Bilanzierung erhalten sie einen guten Überblick über die Kosten, die während der Betriebszeit ihres Gebäudes auf sie zu kommen. Das schafft Planungssicherheit für zukünftige Ausgaben und sie sehen gleich von Anfang an, welche Maßnahmen sich günstiger auf ihren Geldbeutel auswirken. Denn sie dürfen niemals vergessen: Wer anfangs billig baut, baut zweimal.",
        captionHeading: "Unser Angebot für sie:",
        captionP1:"Energieberatung für Wohnen & Gewerbe",
        captionP2:"Sanierungsfahrpläne",
        captionP3:"Lebenszyklus Analyse LCA (Treibhausgas Emissionen nach QNG)",
        captionP4:"Erstellung von Energieausweisen",
        images: [
          "/images/HausMuetze1.jpg",
          "/images/Aktuelles-WEB-Format.jpeg",
          "/images/Energieberatung-1-WEB-Format.jpeg",
          "/images/DIY.gif",
          "/images/QNG-Siegel-WEB-Format.jpeg",
          "/images/LCA-Bilanzierung-WEB-Format.jpeg",
          "/images/Mythen-Technik-Web-Format.jpg"
        ],
        tabNames: ["Aktuelle Lage", "Energieberatung","DIY Rentabilität","QNG-Siegel","LCA-Bilanzierung","Mythen & Technik"], // Names for tabs
        content: [
          // First tab (landing page content)
          [
              "<h2>Die aktuelle Situation</h2>",
              "<p>Seit der Kürzung der Förderung für Sanierungsfahrpläne im August 2024 ist die Nachfrage nach Energie-Beratungen signifikant zurückgegangen. Betrachtet man jedoch das absolute Verhältnis der Fördersummen von Sanierungen im Vergleich zu den Geldern für Sanierungsfahrpläne, dann ist dieses Verhalten der Bauherren nicht wirklich nachvollziehbar. Genau genommen wurde die Förderung für Sanierungsfahrpläne von 80% auf 50% der maximalen Fördersumme gekürzt. Das entspricht bei Ein- oder Zweifamilienhäusern gerade mal einem Betrag von 390,- €. Bei Häusern ab 3 Wohneinheiten sind es 510,- €, um die der Förderbetrag gekürzt wurde.</p>",
              "<p>Setzt man dagegen eine Dachsanierung in Relation, welche sich sehr schnell in einem Bereich von 50.000,- € bis 70.000,- € bewegen kann, dann fällt die Kürzung der Förderung für den Sanierungsfahrplan im Vergleich zur möglichen Förderung für das Dach kaum noch ins Gewicht. Das ist vor allem interessant, weil das ganze Dach gefördert wird und nicht nur der Anteil, der zur Erhöhung der Wärmedämmung nötig ist. Sie bekommen demnach auch Geld für die Erhaltung ihres Hauses und  nicht nur für die Verbesserung.</p>",
              "<p>Auch der Verzicht auf den Sanierungsfahrplan ist nicht anzuraten. Zum einen halbieren sich in diesem Fall die Obergrenzen der Förderung des Daches, zum anderen haben sie keinen gesicherten Anhaltspunkt, wie sich die Sanierungen tatsächlich auswirken. Ist die Dämmung des Dachs gegenüber der Dämmung der Wand richtig gewählt? Wie gut müssen die Fenster sein? Ohne Sanierungsfahrplan bauen sie sozusagen ins Blaue hinein. Unter dem Reiter Energieberatung finden sie  genauere Ausführungen dazu.</p>",
              "<p>Noch wichtiger als die Förderungen sind die eigentlichen Kosten für die Sanierung, die sich neben der Bauplanung in erster Linie aus Material- und Handwerkerkosten zusammensetzen. Diese sind in den letzten Jahren massiv gestiegen. Alleine in 2023 gab es innerhalb der ersten 4 Monate mehrere Preiserhöhungen für das Baumaterial in Höhe von 20% bis 30%. In den Jahren davor lag diese Rate bei 4% bis 5% für das gesamte Kalenderjahr. Berücksichtigt  man  zusätzlich das aktuell zu beobachtende Sterben von Handwerksbetrieben, dann ist auch mit weiter steigenden Personalkosten zu rechnen. In jedem Fall wird die Preissteigerung für Material und Personal größer sein als die Kosten einer etwas längere Kreditlaufzeit. Es ist also nicht sinnvoll eine benötigte Sanierung zu verzögern.</p>",
              "<p>Besonders kritisch wird die Situation bei Nichtwohngebäuden. Hier gibt es nach EU-Vorgabe eine Sanierungspflicht bis 2030 für die am schlechtesten gedämmten 15% der Immobilien. Alleine für die davon betroffenen öffentlichen Gebäude wurde im Herbst 2024 ein Sanierungsvolumen von 130 Milliarden Euro geschätzt. Für die Gebäude in Gewerbe-Hand dürfte diese Summe noch um einiges höher liegen. Bei diesem enormen gesetzlich vorgeschriebenem Sanierungsbedarf ist mit einer noch höheren Auslastung der Planer und Energie-Effizienz-Experten zu rechnen, als es bisher schon der Fall war. Das bedeutet die Zeit von der Anmeldung bis zum Beratungstermin, die heute bei verschiedenen Büros schon bei 3 Monaten liegt, wird sich nach vorsichtigen Schätzungen verdoppeln.</p>",
              "<p>Aus diesen Gründen rate ich jedem Bauherrn dazu, sich rechtzeitig um den Sanierungsfahrplan zu kümmern. Sie haben nach der Erstellung immer noch 15 Jahre Zeit, bis die Umsetzung abgeschlossen sein muss. Es bleibt ihnen also reichlich Zeit, ganz entspannt ihre Investitionen zu planen und geeignete Handwerksfirmen zur Umsetzung zu finden.</p>",
              "<h2>Bitte beachten sie an dieser Stelle:</h2>",
              "<p>Die Erstellung eines Sanierungsfahrplans verpflichtet sie nicht zu dessen Umsetzung, auch wenn sie für seine Erstellung Fördermittel erhalten haben, aber der Sanierungsfahrplan gibt ihnen Planungssicherheit und ein umfassendes Wissen über den Zustand ihrer Gebäude.</p>"
          ],
          // Second tab
          [
              "<h2>Energieberatung</h2>",
              "<p id='questionanswer'>Was gehört zu einer Energieberatung?</p>",
              "<p>Wie der Name schon sagt, handelt es sich hier um eine Beratung und nicht um eine Anlaufstelle, die nur zur Beantragung von Förderungen und der Erstellung von Energieausweisen dient. Auch wenn die offizielle Bezeichnung mittlerweile Energie-Effizienz-Experte lautet, haben sie es mit jemandem zu tun, dessen Aufgabe es ist ihnen in allen Fragen, die ihr Gebäude betreffen, fachkundig zur Seite zu stehen.</p>",
              "<h2>Die Energieberatung gliedert sich in drei Schritte:</h2>",
              "<p id='questionanswer'>1. Die Betrachtung des Gebäudes in seiner Gesamtheit</p>",
              "<p>Möglicherweise haben sie schon einmal einen Anruf erhalten, bei dem ihnen neue Fenster in einer phantastischen Qualität mit Dreischichtverglasung angeboten worden sind. Wären diese für ihr Haus geeignet gewesen? Oder sie sind in eine Diskussion geraten, bei der sich zwei Hausbesitzer darüber gestritten haben, ob die Schichtdicke der Dämmung 20cm sein muss oder ob nicht auch 16cm genügen. Wer hatte Recht?</p>",
              "<img src='/images/Energieberatung-2-WEB-Format.jpeg' alt='sideImage'/>",
              "<p>Diese Frage kann ihnen niemand allgemeingültig beantworten. Das hängt  tatsächlich von ihrem Gebäude ab. Was tut ein Energie-Effizienz-Experte in diesem Fall? Er lässt sich von ihnen die Pläne geben oder nimmt selbst Maß und bildet ihr gesamtes Gebäude in einem virtuellen Modell nach. Anschließend wird der Wärmedurchgang der Bauteile der wärmedämmenden Hülle berechnet und in das Modell eingefügt. Bei Nichtwohngebäuden kommt  zusätzlich die Definition der unterschiedlichen Bereiche, der sogenannten Zonen dazu.</p>",
              "<p>Das Ergebnis ist eine Abbildung ihres Gebäudes in seiner Gesamtheit. Mit diesem Modell ist es überhaupt erst möglich, die Wirkung neuer Fenster zu ermitteln oder die benötigte Schichtdicke der Dämmung zu berechnen.</p>",
              "<p>Nachdem die Betrachtung der Gebäudehülle abgeschlossen ist, erfolgt die Aufnahme der Anlagentechnik. Dazu gehört alles, was sie benötigen, um den Wärmeverlust durch die Hülle des Gebäudes wieder auszugleichen, kurz gesagt die Heizung. Hier spielt es eine Rolle,  womit sie heizen, wie effektiv ihre Heizung arbeitet und wie viel Strom sie zur Steuerung benötigt. Positiv wirkt es sich dabei aus, wenn sie Sonnenkollektoren auf dem Dach haben, oder vielleicht  schon eine Solaranlage. Bei Nichtwohngebäuden wird zusätzlich der Lichteinfall von außen bilanziert und berechnet wie viel elektrische Energie für die Beleuchtung notwendig ist um die gesetzlich vorgeschriebene Helligkeit am Arbeitsplatz zu gewährleisten.</p>",
              "<p>Aus diesem Gesamtmodell, nennen wir es die Patientenakte ihres Gebäudes, ermittelt ihr Energie-Effizienz-Experte nun den Primärenergieverbrauch ihres Hauses. Das ist die Energie, die ihrem Gebäude letztenendes zugeführt werden muss, um die Wärmeverluste durch die Hülle auszugleichen. Gleichzeitig ist das auch der Wert, der im Energieausweis ihres Hauses steht.</p>",
              "<p id='questionanswer'>2. Reduzierung und Optimierung des Energieverbrauchs</p>",
              "<p>Geht es darum den Energieverbrauch ihres Gebäudes zu reduzieren, nützt ihnen der Primärenergiewert allerdings wenig. Dafür wird die ganze Patientenakte benötigt und nicht nur das Ergebnis. Schließlich müssen die einzelnen Bauteile auf ihre Wirkung innerhalb der Gebäudehülle überprüft werden. Es macht also keinen Sinn sich im Internet einen billigen Energieausweis ausstellen zu lassen, um Geld zu sparen, und damit zum Energie-Effizienz-Experten ihre Wahl zu gehen. Er muss in diesem Fall die ganze Arbeit noch einmal machen und sie zahlen doppelt.</p>",
              "<img src='/images/Energieberatung-3-WEB-Format.jpeg' alt='sideImage'/>",
              "<p>Mit dem Modell ihres Gebäudes ist es  möglich, verschiedene Szenarien zu simulieren. Dazu gehört zum Beispiel der eingangs erwähnte Austausch der Fenster. Es wird geprüft, wie es sich auswirkt, wenn die neuen Fenster einen extrem geringen Wärmedurchgang haben. Oder ob es nicht doch günstiger ist die Fenster nicht in der höchsten Qualitätsstufe zu kaufen und  stattdessen die Dämmung der Außenwand um 2cm zu verstärken? Und wie weit muss gleichzeitig das Dach  gedämmt werden, damit die an den Fenstern und der Wand eingesparte Energie nicht wieder über das Dach entweicht?</p>",
              "<p>Ihr Energie-Effizienz-Experte wiegt alle diese Werte gegeneinander ab und ermittelt ein günstiges Verhältnis der Bauteile zueinander, bei dem sie eine möglichst hohe Energieeinsparung erzielen bei gleichzeitig geringsten Kosten. Technisch bedeutet das, keines der Bauteile sollte im Verhältnis zu dem Rest der Gebäudehülle für seine Bauteilgruppe zu stark, aber auch nicht zu schwach gedämmt sein.</p>",
              "<p>Wenn die Wärmeverluste der zukünftigen sanierten Gebäudehülle feststehen, wird passend dazu eine sinnvolle Anlagentechnik ermittelt, die ihnen möglichst geringe Heizkosten garantiert. Dazu muss die Heizung aber nicht zwingend ausgetauscht oder erneuert werden. Was genau geschehen soll, entscheiden sie im Beratungsgespräch mit ihrem Energie-Effizienz-Experten.</p>",
              "<p id='red-ribbon'>An dieser Stelle ist dringend anzumerken: Auch nach dem neuen Heizungsgesetz soll eine Heizung nur ausgetauscht werden, wenn sie mit fossilen Brennstoffen betrieben wird, mindestens 30 Jahre alt ist und der Austausch als wirtschaftlich sinnvoll erachtet wird!</p>",
              "<p>Zum Schluss bringt ihr Energie-Effizienz-Experten alle Maßnahmen in eine bautechnisch geeignete Reihenfolge und erstellt ihnen den sogenannten Sanierungsfahrplan. Bei Wohngebäuden wird dieser auch als individueller Sanierungsfahrplan iSFP bezeichnet, bei Gewerbeimmobilien spricht man nur von einem Sanierungsfahrplan. Dieses rechtlich wirksame Dokument erlaubt es ihnen nun für die einzelnen Maßnahmen der Sanierung oder einer Komplettsanierung zum Effizienz-Haus, die entsprechenden Förderungen und Kredite zu beantragen.</p>",
              "<p id='questionanswer'>3. Planung und Umsetzung unter wirtschaftlichen Bedingungen</p>",
              "<img src='/images/Energieberatung-4-WEB-Format.jpeg' alt='sideImage'/>",
              "<p>Natürlich sollte man nicht ins Blaue hinein anfangen zu sanieren. Förderungen und ermäßigte Kredite gibt es in verschiedenen Höhen, je nachdem welche Energie-Effizienz-Stufe ihr Gebäude nach der Sanierung erreicht. Wenn sie die Kosten optimieren wollen, sollten sie darauf achten, dass der berechnete Wert der Primärenergie nicht  genau zwischen  zwei Stufen liegt, sondern noch die nächstniedrigere erreicht. So erhalten sie für einen geringen Einsatz eine höhere Förderung.</p>",
              "<p>Allerdings geht es bei der Wirtschaftlichkeit nicht nur um die aktuellen Baukosten. Mindestens genauso wichtig ist eine Bilanzierung der Nachhaltigkeit. Dazu gehört die mögliche Preisentwicklung auf dem Brennstoffmarkt, die Verschleißanfälligkeit der verbauten Materialien, sowie die Möglichkeiten zukünftiger Ausbauten oder Sanierungen.</p>",
              "<p>Bei allen diesen Themen steht ihnen ihr Energie-Effizienz-Experte im Laufe einer Energieberatung zur Seite und hilft ihnen die richtigen Entscheidungen zu treffen. Er ist ihr persönlicher Berater.</p>",
          ],
          // Third tab
          [
              "<h2>Ist selbst Hand anlegen bei Wohngebäuden rentabel</h2>",
              "<p>Bauen ist immer eine teure Angelegenheit. Vor allem junge Familien brauchen Platz, haben aber oft nicht das Geld, um alle Gewerke von Handwerkern durchführen zu lassen. Das treibt an manchen Stellen ziemlich haarsträubende Stilblüten. Teilweise kommt es vor, dass Bauherren schon nach kurzer Einweisung damit beginnen Wände zu mauern, obwohl sie vorher noch nie eine Wasserwaage in der Hand gehalten haben. Dabei sollte man wissen, dass selbst ein gelernter Maurer eine Zertifizierung benötigt, um überhaupt Ecken mauern zu dürfen.</p>",
              "<p>Um die staatlichen Förderungen und Kredite der KfW zu bekommen muss  man jedoch nachweisen, dass das Gewerk nach allen Regeln der Kunst fachlich richtig ausgeführt wurde. Diese Bestätigungen werden normalerweise nach Abschluss der Arbeiten von den mitwirkenden Handwerksfirmen ausgestellt und von ihrem Energie-Effizienz-Experten gesammelt und eingereicht.</p>",
              "<p>Auch wenn sie selbst Hand anlegen, muss es für die von ihnen durchgeführten Arbeiten eine entsprechende Bescheinigung geben, dass alle Arbeiten fachgerecht ausgeführt wurden. Diese kann ihnen nach dem Gesetz auch ihr Energie-Effizienz-Experte ausstellen, aber das ist blanke Theorie. Niemand außer den speziell von den Herstellern geschulten Fachleuten kann ihnen definitiv sagen wie moderne Materialien fachgerecht verarbeitet werden, auch ihr Energie-Experte nicht. Aus diesem Grund wird er sich davor hüten, ihnen eine derartige Bescheinigung auszustellen.</p>",
              "<p>Was kann man  dann noch tun, um die Kosten etwas zu reduzieren? Im Wesentlichen gibt es zwei  praktikable Möglichkeiten:</p>",
              "<p>Entweder sie vereinbaren mit dem Handwerker ihre Wahl eine Mitarbeit auf dem Bau. Das heißt sie helfen bei den Arbeiten und bekommen von ihm dafür einen Nachlass auf die Endsumme. In diesem Fall kontrolliert der Handwerker ihre Arbeit und bestätigt die fachliche Richtigkeit.</p>",
              "<h2>Oder sie verzichten auf Förderung:</h2>",
              "<p>Wenn die Förderung für einzelne Maßnahmen geringer ist als die Kosten für die Arbeitszeit der Handwerker, kann es sich anbieten diese Arbeiten selbst zu übernehmen und dafür  keine Förderung zu beantragen. Das geht aber nur wenn es sich um eine Sanierung mit Einzelmaßnahmen handelt. Wenn sie Förderung für eine Sanierung zum Effizienzhaus beantragt haben oder neu bauen, bleiben ihnen nur Arbeiten übrig, die nicht der Förderung unterliegen, und für die dementsprechend auch kein Nachweis erforderlich ist.</p>"
          ],
          // Fourth tab
          [
            "<h2>Qualitätssiegel Nachhaltiges Bauen - QNG</h2>",
            "<p id='questionanswer'>Was ist das QNG Siegel?</p>",
            "<p>Das Qualitätssiegel Nachhaltiges Bauen ist ein Werkzeug zur Lenkung der Gebäudeerstellung und -sanierung hin zu einem zukunftsorientierten Immobilienbestand in Deutschland. Vorangetrieben wird dieses Ziel dadurch, dass bereits heute eine große Zahl an Förderprogrammen und Kreditvarianten an die Zertifizierung gebunden ist.</p>",
            "<p>Der Ausgangspunkt für das QNG Siegel ist eine Energie-Effizienz des Gebäudes, wie sie bei einem Neubau gefordert wird. Dazu kommen je nach Nutzung als Wohn- oder Nichtwohngebäude noch weitere Forderungen:</p>",
            `<table class="lighting-table">
              <thead>
                <tr>
                  <th>Anforderung</th>
                  <th>Wohngebäude</th>
                  <th>Nichtwohngebäude</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-greenrow">
                  <td>LCA Bilanzierung (Lebenszyklus Analyse)</td>
                  <td>x</td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>Nachhaltige Materialgewinnung</td>
                  <td>x</td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>Schadstoffvermeidung in Baumaterialien</td>
                  <td>x</td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>Barrierefreiheit</td>
                  <td>x</td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>Bewertung der Naturgefahren am Standort</td>
                  <td></td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>Dachbegrünung</td>
                  <td></td>
                  <td>x</td>
                </tr>
              </tbody>
            </table>
            `,
            "<p id='questionanswer'>Wer darf das QNG Siegel vergeben?</p>",
            "<p>Während die Lebenszyklusanalyse (LCA) von einem dafür zertifizierten Energie-Effizienz-Experten durchgeführt werden kann, darf das QNG Siegel und damit die Überprüfung der nachfolgenden fünf Anforderungen nur von einer der vier in Deutschland zugelassenen Zertifizierungsstellen vergeben werden. Diese sind:</p>",
            `<table class="lighting-table">
              <thead>
                <tr>
                  <th>Zertifizierungsstelle</th>
                  <th>Wohngebäude</th>
                  <th>Nichtwohngebäude</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>DGNB GmbH</strong><br>
                    Deutsche Gesellschaft für Nachhaltiges Bauen
                  </td>
                  <td>x</td>
                  <td>x</td>
                </tr>
                <tr>
                  <td>
                    <strong>NaWoh</strong><br>
                    Verein zur Förderung der Nachhaltigkeit im Wohnungsbau e. V.
                  </td>
                  <td>x</td>
                  <td>---</td>
                </tr>
                <tr>
                  <td>
                    <strong>BIRN</strong><br>
                    Bau-Institut für ressourceneffizientes und nachhaltiges Bauen GmbH
                  </td>
                  <td>x</td>
                  <td>---</td>
                </tr>
                <tr>
                  <td>
                    <strong>STI</strong><br>
                    Steinbeis-Transfer-Institut Bau- und Immobilienwirtschaft
                  </td>
                  <td>---</td>
                  <td>x</td>
                </tr>
              </tbody>
            </table>
            `,
            "<p>Wichtig  zu wissen ist, dass jede der vier Zertifizierungsstellen eigene Vorgaben für die fünf durch sie zu prüfenden Anforderungen entwickelt hat. Die Siegel der Zertifizierungsstellen sind demnach nicht gleichwertig, auch wenn sie bei der Vergabe von Förderungen und Krediten so behandelt werden.</p>",
            "<p id='questionanswer'>Welche Arten von QNG Siegeln gibt es?</p>",
            "<p>Alle vier Zertifizierungsstellen unterscheiden  zwei verschiedenen Varianten des QNG Siegels, das Siegel Plus und das Siegel Premium. Bei beiden Varianten wird zu jeder Anforderung ein Prozentsatz angegeben, zu dem sie erfüllt werden muss. Dabei liegen die Prozentpunkte beim  QNG Premium Siegel höher.</p>",
            `<table class="lighting-table">
              <thead>
                <tr>
                  <th>QNG PLUS</th>
                  <td>überdurchschnittlicher Anspruch</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>QNG PREMIUM</th>
                  <td>gehobener Anspruch</td>
                </tr>
              </tbody>
            </table>
            `,
            "<p id='questionanswer'>Welche Aufgabe hat der Energie-Effizienz-Experte?</p>",
            "<p>Der Energie-Effizienz-Experte führt die Energieberechnung und die LCA Bilanzierung durch. Daneben verwaltet er alle eingehenden Nachweise und Zertifikate der Bauausführung. Diese Sammlung, sowie die zusätzlich vorgeschriebene Baustellenbegehung bedeutet einen erheblichen Zeitaufwand, der in der Regel auf Stundenbasis in Rechnung gestellt wird.</p>",
            "<p id='questionanswer'>Wie lange ist das QNG Siegel gültig?</p>",
            "<p>Die Gültigkeit eines Siegels erlischt, sobald bauliche Änderungen durchgeführt werden. Bleibt der Bestand wie besiegelt erhalten, so ist das Siegel aber trotzdem nur fünf Jahre gültig!</p>",
         ],
          // Fifth tab
          [
              "<h2>Lebenszyklus Analyse – LCA (Life Cycle Assessment)</h2>",
              "<p id='questionanswer'>Was ist LCA?</p>",
              "<p>Unter dem Begriff Lebenszyklus-Analyse versteht man einen Paradigmenwechsel in der Gebäudeerrichtung und -sanierung. Während bei der Analyse des Energieverbrauchs nur der laufende Betrieb betrachtet wird, werden für die Berechnung der Nachhaltigkeitsklasse (NH) auch die sogenannten grauen Energien berücksichtigt. Darunter versteht man alle Energien, die für die Erstellung der Bauteile, ihren Ersatz  wegen Verschleiß und ihre Entsorgung benötigt werden.</p>",
              "<p id='questionanswer'>Warum ist die LCA Bilanzierung auch ohne QNG Siegel sinnvoll?</p>",
              "<p>Bei der Beschreibung von Förderungen und Krediten findet sich oft die Bezeichnungen Treibhausgasemissionen nach Vorgaben des QNG Siegels oder klimafreundliches Gebäude. Dahinter verbirgt sich nichts anderes als die LCA Bilanzierung. Es ist also nicht nötig ein QNG Siegel zu beantragen, um  die entsprechende Förderung oder den entsprechenden Kredit zu bekommen. Natürlich gibt es Unterschiede bei der Förderung, aber diese beziehen sich oft nur auf die maximale Höhe des Kredits. An dieser Stelle muss sehr genau abgewogen werden, ob sich der finanzielle Mehraufwand für das QNG Siegel wirklich lohnt.</p>",
              "<p id='questionanswer'>Was wird bei der LCA Bilanzierung berechnet?</p>",
              "<p>Für die Lebenszyklus-Bewertung eines Gebäudes kommen zwei neue Einheiten ins Spiel. Dabei handelt es sich um den Beitrag zum Treibhauseffekt, Global Warming Potential (GWP) und den Anteil nicht-erneuerbarer Primärenergie, Primary Energy Non Renewable Total (PENRT). Gemessen werden diese Werte in:</p>",
              `<table class="lighting-table">
                <thead>
                  <tr>
                    <th>GWP 100</th>
                    <td>kg CO2 Äquivalent / m² und Jahr</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>PENRT</th>
                    <td>kWh / m² und Jahr</td>
                  </tr>
                </tbody>
              </table>
              `,
              "<p>Etwas irreführend ist die Bezeichnung GWP100. Dieser Wert bezieht sich auf 100 Jahre. Für die LCA Bilanz werden bei einem Gebäude aber tatsächlich nur 50 Jahre betrachtet.</p>",
              "<p id='questionanswer'>Wie hoch dürfen GWP und PENRT werden?</p>",
              "<p>Der zulässige Wert hängt von der Nutzung des Gebäudes ab. Bei Wohngebäuden gelten feste Werte pro Nettoraumfläche und Jahr. Die Grenzwerte bei Nichtwohngebäuden werden erst an Hand der Art der Nutzung und der jeweils dafür benötigten Fläche durch ihren Energie-Effizienz-Experten berechnet.</p>",
              "<p id='questionanswer'>Was ist der Unterschied zu den Treibhausgasemissionen im Energieausweis?</p>",
              "<p>Auch im Energieausweis eines Gebäudes werden Treibhausgasemissionen in kg CO2 Äquivalent / m² und Jahr angegeben. Diese beziehen sich aber nur auf den Energieverlust durch die wärmende Hülle im Betrieb des Gebäudes, sowie den zugeführten Strom für die Erzeugung der Wärmeenergie. Die errechneten Treibhausgasemissionen der LCA Bilanzierung beziehen sich dagegen auf die komplette Erstellung, Verschleiß und Entsorgung des Gebäudes. Dazu gehören auch Innenwände, Gebäudeteile die außerhalb der wärmenden Hülle liegen und sogar Bodenbeläge in den Innenräumen.</p>",
              "<p id='questionanswer'>Wie ist der Verschleiß eines Gebäudes definiert?</p>",
              "<p>Jeder Baustoff, ob im Innen- oder Außenbereich eines Gebäudes unterliegt einer Abnutzung. Diese Lebensdauer wird für jedes Material in gesetzlich vorgegebenen Tabellen  angegeben. Beträgt die Lebensdauer eines Materials zum Beispiel 25 Jahre, so muss der entsprechende GWP Wert im veranschlagten Betrachtungszeitraum von 50 Jahren zweimal eingerechnet werden. Vor allem an dieser Stelle kommt der Aspekt der Nachhaltigkeit zum Tragen.</p>",
              "<p id='questionanswer'>Ein Beispiel für Verschleiß</p>",
              "<p>Wird zum Beispiel ein Teppichboden als Auslegeware mit einem Massivholzparkett verglichen, so ist der GWP-Wert eines Teppichbodens bei einmaliger Verlegung ungefähr doppelt so groß wie beim  Parkett. Die Lebensdauer des Teppichs ist aber 5 mal kleiner. Es werden demnach für 50 Jahre Gebäudebetrieb 5 Teppichböden benötigt. Daraus ergibt sich für den Teppichboden in der LCA Bilanzierung ein annähernd  zehnmal größerer GWP Wert.</p>",
              "<p>Zieht man nun in Betracht, dass die Verlegung von 5 m² Teppich auch nicht billiger ist, als 1 m² Parkett zu verlegen, dann zeigt sich der klare Vorteil des Parketts bei der bilanzierung der Nachhaltigkeit.</p>",
          ],
          // Sixth tab
          [
              "<h2>MYTHEN UND LEGENDEN ÜBER GEBÄUDEN UND TECHNIK</h2>",
              `<div class="toc-container">
                <div class="toc">
                <h3>INHALTSVERZEICHNIS</h3>
                  <ul class="toc">
                  <li><a href="#waermepumpe">Mit einer Wärmepumpe löse ich alle meine Heizungs-Probleme</a></li>
                  <li><a href="#waermedaemmung">Unter der Wärmedämmung einer Hauswand bildet sich Schimmel</a></li>
                  <li><a href="#fenster">Wenn neue Fenster eingebaut werden schimmelt es im Zimmer</a></li>
                  <li><a href="#lueftung">Eine Lüftung mit Wärmerückgewinnung ist teuer und rechnet sich nicht</a></li>
                  <li><a href="#handwerker">Mein Handwerker sagt: „Das bringt nichts“</a></li>
                  <li><a href="#heizungsgesetz">Das Heizungsgesetz zwingt mich eine neue Heizung zu kaufen!</a></li>
                </ul>
                </div>
              </div>
              `,
              `<section id="waermepumpe"><p id='questionanswer'>Mit einer Wärmepumpe löse ich alle meine Heizungs-Probleme</p></section>`,
              "<p>Wärmepumpen sind eine feine Sache. Ihr Prinzip entspricht dem eines Kühlschranks. durch Kompression und Ausdehnung des Kühlmittels wird eine Seite gekühlt, während sich die andere dabei erwärmt. Beim Kühlschrank wird die Innenseite gekühlt und die entstehende Wärme über den Kühler auf der Rückseite abgeführt. Bei einer Wärmepumpe nutzt man dieses Prinzip genau anders herum. Die entstehende Wärme wird zum Heizen ins Haus geleitet, während die Kälte an die umgebende Außenluft abgegeben wird.</p>",
              "<p>Aber genau wie es bei einem Kühlschrank ein Energie-Label gibt, das aussagt wie viel Strom investiert werden muss, um die gewünschte Kühlung zu erreichen, gibt es bei Wärmepumpen den sogenannten C-Wert. Dieser sagt aus, wie groß das Verhältnis der gewonnenen Wärmeenergie zur Energie des benötigten  Stroms ist. Haben sie zum Beispiel eine Wärmepumpe, die der Außenluft Energie entzieht, um damit Wasser zum Heizen zu erwärmen, dann können wir aktuell von einem C-Wert der Größe 3 ausgehen. Das bedeutet, um 300 kWh Wärme zu erhalten, müssen sie 100 kWh Strom investieren. Wenn sie eine Tiefbohrung machen oder Bodenkollektoren vergraben, dann lässt sich der C-Wert noch weiter steigern, aber dafür steigen auch die Baukosten.</p>",
              "<p>Das eigentliche Problem liegt darin, dass der C-Wert nicht konstant ist. Je größer die Vorlauftemperatur in der Heizungsverteilung sein muss, desto geringer wird dieser Wert. Das bedeutet, wenn sie alte Heizkörper haben, die eine hohe Vorlauftemperatur erfordern, wird die Effektivität ihrer Wärmepumpe immer geringer, bis sie zum Schluss fast ausschließlich mit Strom heizen.</p>",
              "<p>Sie benötigen zu ihrer neuen Wärmepumpe demnach in den meisten Fällen auch neue Heizkörper. Die optimale Variante wären Flächenheizkörper in den Bauteilen oder eine Fußbodenheizung. Hier wird die geringste Vorlauftemperatur benötigt und damit erreichen sie auch die höchste Effektivität ihrer Wärmepumpe. Aber diese Umstellung erhöht auch die Kosten.</p>",
              `<section id="waermedaemmung"><p id='questionanswer'>Unter der Wärmedämmung einer Hauswand bildet sich Schimmel</p></section>`,
              "<p>Diese Geschichten gehen überall um und treffen auch genauso häufig auf empfängnisbereite Verschwörungstheoretiker, die sie gerne weiter erzählen. Was steckt also dahinter?</p>",
              "<p>Luft kann umso mehr Flüssigkeit halten, je wärmer sie ist. Kühlt die Luft ab, dann verliert sie ihre Tragfähigkeit und das Wasser fällt in Form von Tropfen aus. Das ist kurz gesagt die Entstehung von Regen.</p>",
              "<p>Der gleiche Vorgang der Kondensation kann auch innerhalb der Hauswand auftreten. Da der Innenraum in der kalten Jahreszeit wärmer ist als die Außenluft, kommt es zu einem Temperaturgefälle innerhalb der Wand. Dringt Feuchtigkeit von innen nach außen,  dann besteht die Möglichkeit, dass sie so weit abkühlt, bis Kondenswasser ausfällt. Bildlich gesprochen regnet es in der Wand. Dieser Vorgang erfolgt vorzugsweise an Übergängen zwischen stark unterschiedlichen Materialien wie zum Beispiel Stein, Putz und Polystyrol, also im besagten Fall direkt an der Wärmedämmung.  Ein deratiger Tauwassereintrag begünstigt natürlich die Schimmelbildung.</p>",
              "<img src='/images/Ziegelwand-240-EPS-35-160.jpg' alt='square'/>",
              "<img src='/images/Ziegelwand-240-EPS-45-40.jpg'  alt='square'/>",
              "<p>Betrachtet man jedoch die Simulation einer 24 cm dicken Außenwand aus Hohllochziegeln, mit einer Dämmung aus nur 4 cm starkem Polystyrol, wie sie zu Beginn der Wärmedämmung in den 70-er Jahren verwendet wurde, dann zeigt sich selbst hier kein Kondenswasserausfall. Auf der Außenseite steigt die Feuchtigkeit an, erreicht aber niemals den Taupunkt, also 100 %.</p>",
              "<p>In der zweiten Simulation, bei der die Dämmstoffdicke auf 16 cm erhöht wurde, wie es heute üblich ist, liegt die Kurve der relativen Luftfeuchtigkeit noch einmal tiefer. Es gibt also keine Möglichkeit, dass sich Kondenswasser zwischen Mauerwerk und Dämmung bilden kann.</p>",
              "<p>Kurz gesagt, alle Geschichten über Schimmelbildung zwischen Hauswand und Wärmedämmsystem müssen andere Ursachen haben. Möglicherweise wurde der Dachüberstand nicht der neuen Wandstärke angepasst oder es lagen andere Verarbeitungsfehler vor, die zu Regenwassereintrag geführt haben. Auf diese Weise kann es dann zur Hinterfeuchtung der Dämmung und zur Schimmelbildung gekommen sein.</p>",
              `<section id="fenster"><p id='questionanswer'>Wenn neue Fenster eingebaut werden schimmelt es im Zimmer</p></section>`,
              "<p>Diese Aussage ist nur bedingt richtig. Durch den Einbau der neuen Fester verändert sich der Luftstrom, der bisher durch überalterte oder kaputte Dichtungen eindringen konnte. Besonders massiv ist dieser Effekt zu spüren, wenn noch alte Fenster ohne Dichtungslippen aus den 60-er Jahren vorhanden sind.</p>",
              "<p>Jeder Bewohner erhöht durch seinen Atem die Luftfeuchtigkeit im Raum. Durch aktives Lüften und den Luftstrom, der durch kaputte oder nicht vorhandene Dichtungen entsteht, wird die Raumluft ausgetauscht. So reduziert sich vor allem in der kalten Jahreszeit die Luftfeuchtigkeit im Gebäude. Werden nun neue Fenster eingesetzt, dann sind alle Dichtungen wieder intakt und der passive Luftstrom wird annähernd zu null. Das bedeutet, die Luftfeuchtigkeit steigt immer weiter an, bis es zur Kondensation an kalten Oberflächen wie zum Beispiel den Zimmerecken kommt. Die Folge ist Schimmelbildung.</p>",
              "<p>Der Auslöser der Schimmelbildung ist also die Erhöhung der Luftfeuchtigkeit, weil die passive Lüftung entfällt. Ändern die Bewohner mit dem Einbau der neuen Fenster auch ihr aktives Lüftungsverhalten, dann kann die Luftfeuchtigkeit auch auf diese Weise  reduziert werden.</p>",
              "<p>Häufig begegnet man auch der Aussage, dass mit dem Einbau der neuen Fenster auch unbedingt die Wand gedämmt werden muss, damit die Schimmelbildung unterbunden wird. Was steckt dahinter?</p>",
              "<p>Durch die Außendämmung erhöht sich auch die Oberflächentemperatur an der Innenseite der Wände. Aus diesem Grund muss die Luftfeuchtigkeit im Raum viel höher werden, damit es noch zur Kondensation in den Zimmerecken kommen kann. Das eigentliche Problem, die zu hohe Luftfeuchtigkeit, wird dadurch aber nicht behoben.</p>",
              "<p>In manchen Fällen sind sogar schon negative Effekte aufgetreten, wenn Hausbesitzer sich durch die neue Wärmedämmung zu sicher gefühlt haben. Ein beliebtes Vorgehen ist es zum Beispiel eine eingebaute Loggia bei der Dämmung des Gebäudes in die wärmedämmenden Hülle zu integrieren. Man schließt den Raum zwischen der Außenplatte und der Decke einfach mit Fenstern ab und über dämmt die Außenplatte genauso wie die restliche Wand. Das Problem ist nur, dass die ehemalig Loggia als abgeschlossener Bereich an der Außenseite liegt und nicht beheizt wird. Damit entsteht eine kühlere Zone in der es nicht selten zu schimmeln beginnt.</p>",
              `<section id="lueftung"><p id='questionanswer'>Eine Lüftung mit Wärmerückgewinnung ist teuer und rechnet sich nicht</p></section>`,
              "<p>Wie groß der Aufwand ist, eine Lüftung mit Wärmerückgewinnung in ein bestehendes Gebäude einzubauen, hängt natürlich sehr von der Geometrie des Gebäudes ab. Wenn für eine zentrale Lüftung Rohrleitungen durch alle Räume gezogen werden müssen, dann ist das sicher ein gewisser Aufwand, aber durch geschickte Planung lässt sich dieser vor allem in Altbau-Wohnungen mit hohen Decken stark  reduzieren. Außerdem gibt es nicht nur zentrale Lüftungssysteme. Mittlerweile wurden die Einzelraum-Lüfter sehr vorteilhaft weiter entwickelt. Um diese einzubauen muss nur ein Loch in die Wand gebohrt und eine Stromleitung gelegt werden.</p>",
              "<p>Welchen Zugewinn erreicht nun die Wärmerückgewinnung? Moderne Systeme sind in der Lage bis zu 90 % der Wärme der Abluft an die Zuluft zu übertragen. Das bedeutet, dass 90 % der Heizenergie, die sie normalerweise durch die regelmäßige Lüftung verlieren würden erhalten bleiben. Das ist eine erhebliche Menge, vor allem wenn sie  wegen sehr gut abgedichteten Fenstern häufig lüften müssen.</p>",
              "<p>Welchen Effekt hat die automatische Lüftung auf den Wohnkomfort? Jeder kennt das angenehme Gefühl, wenn durch die Fensterlüftung frische Luft ins Zimmer strömt. Dieses Gefühl entsteht aber nicht in erster Linie, weil die frische Luft so gut ist, sondern weil die Raumluft so verbraucht war. Mit einer automatischen Lüftung kommt es erst gar nicht zu abgestandener Raumluft. Die permanente Ventilation sorgt immer für ein gutes Raumklima. Das ist besonders wichtig, wenn sie gerne bei geschlossenem Fenster schlafen, oder wegen zu großem Straßenlärm mit geschlossenem Fenster schlafen müssen. Durch die automatische Lüftung wird die Luft im Schlafzimmer am Morgen genauso gut sein wie am Abend zuvor.</p>",
              `<section id="handwerker"><p id='questionanswer'>Mein Handwerker sagt: „das bringt nichts“</p></section>`,
              "<p>Natürlich haben Handwerker oft eine große Berufserfahrung, aber in vielen Fällen kann ihnen sogar ihr Energie-Effizienz-Experte nicht genau sagen, in welche Richtung das Ergebnis der Berechnungen tendieren wird. Nicht selten gibt es große Überraschungen, weil ein weniger beachtetes Wärme-Leck wie eine schlecht gedämmte Bodenplatte oder eine Wand, die nur von innen gedämmt werden kann, ein großes Loch in die Energiebilanz reißt. Erst wenn der Energieverbrauch mit allen Parametern über den gesamten Jahresverlauf simuliert wurde, ist ein wirklich verlässliches Ergebnis zu erwarten.</p>",
              `<section id="heizungsgesetz"><p id='questionanswer'>Das Heizungsgesetz zwingt mich eine neue Heizung zu kaufen!</h2></section>`,
              "<p>Diese Aussage ist in den meisten Fällen grober Unfug. Der Heizkessel muss nur ersetzt werden wenn er 30 Jahre und älter ist und dazu alle folgenden Aussagen erfüllt sind:</p>",
              `<table class="lighting-table">
                <thead>
                  <tr>
                    <td>Sie sind erst nach dem 01.02.2002 Eigentümer geworden,<br>
                        oder sie bewohnen die Immobilie nicht selbst,<br>
                        oder die Immobilie besteht aus mehr als 2 Wohnungen.</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>und der Kessel wird mit Gas oder Öl beheizt</td>
                  </tr>
                  <tr>
                    <td>und es handelt sich um einen alten Konstant-Temperatur-Kessel</td>
                  </tr>
                  <tr>
                    <td>und die Heizungsanlage hat zwischen 4 kW und 400 kW</td>
                  </tr>
                  <tr>
                    <td class="boldpoint">UND DER AUFWAND IST WIRTSCHAFTLICH VERTRETBAR!</td>
                  </tr>
                </tbody>
              </table>
              `,
              "<p>Alleine die erste Aussage schließt schon viele Immobilien aus. Wenn sie zum Beispiel ein Einfamilienhaus besitzen, das sie selbst bewohnen, und bereits vor dem 01.02.2002 der Eigentümer waren, sind sie schon aus dem Rennen. Es sei denn ihr Kaminkehrer sagt ihnen, dass die Anlage zu viele Schadstoffe ausstößt - aber das ist eine andere Geschichte.</p>",
              "<p>Gleichzeitig muss der Kessel mit fossilen Brennstoffen beheizt werden, ein veraltete Konstant-Temperatur-Kessel sein und im Bereich zwischen 4 kW und 400 kW liegen.</p>",
              "<p>Aber selbst wenn alle   vier technischen Aussagen erfüllt sind, muss der Austausch wirtschaftlich vertretbar sein. Was bedeutet das in der Praxis?</p>",
              "<p>Die Sanierungskosten, die sie für die neue Heizung aufwenden, müssen sich innerhalb einer gewissen Dauer wieder durch Einsparungen, welche die neue Technik mit sich bringt, amortisieren! In allen anderen Fällen ist der Austausch nicht wirtschaftlich.</p>",
          ]
      ]
      }
    ];
  
    // specificServices
    const heroSection = document.querySelector(".hero-section");
    servicesData.forEach((service) => {
      const heroService = document.createElement("div");
      heroService.className = "hero-services";
      heroService.dataset.id = service.id;
    
      let captions = `
        ${service.captionHeading ? `<h3>${service.captionHeading}</h3>` : ""}
        ${service.captionP1 ? `<p>${service.captionP1}</p>` : ""}
        ${service.captionP2 ? `<p>${service.captionP2}</p>` : ""}
        ${service.captionP3 ? `<p>${service.captionP3}</p>` : ""}
        ${service.captionP4 ? `<p>${service.captionP4}</p>` : ""}
      `;
    
      heroService.innerHTML = `
        <div class="serviceTitle">
          ${service.title}
          <div class="hero-image">
          <img src="${service.images[0]}" alt="${service.title}">
          <div class="hero-description-overlay">
            ${captions}
          </div>  
        </div>
        </div>
        <div class="hero-text">
          <p>${service.description}</p>
          <div class="visit-page-text">Hier geht es zu den Informationen</div>
        </div>
      `;
    
      heroSection.appendChild(heroService);
    });
    // Add event listener for clicks on hero-section
    heroSection.addEventListener("click", (event) => {
      const clickedService = event.target.closest(".hero-services");
  
      if (clickedService) {
        const serviceId = clickedService.dataset.id;
        const service = servicesData.find((s) => s.id === serviceId);
  
        if (service) {
          localStorage.setItem("serviceContent", JSON.stringify(service)); // Save service data
          window.location.href = "specificService.html"; // Redirect
        }
      }
    });

    // Handle click events for navigation links
    document.querySelectorAll("[data-page-key]").forEach((link) => {
      link.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent default link behavior

          const key = link.dataset.pageKey; // Get the key for the selected page

          // Save the selected page key to localStorage
          localStorage.setItem("selectedPage", key);

          // Redirect to `info.html` to display the selected content
          window.location.href = "info.html";
      });
  });

  document.querySelectorAll('.hero-services').forEach((tile) => {
    tile.addEventListener('mouseenter', () => tile.classList.add('hover'));
    tile.addEventListener('mouseleave', () => tile.classList.remove('hover'));
});


});
