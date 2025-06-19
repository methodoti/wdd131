// Data structure for the entire checklist
const checklistData = [
    {
        sectionTitle: "BEFORE ENGINE START",
        items: [
            { item: "Preflight", state: "COMPLETE", completed: false }, { item: "Control lock", state: "REMOVED", completed: false }, { item: "Maneuver speeds", state: "REVIEW", completed: false }, { item: "Parking brake", state: "SET", completed: false }, { item: "Gear switch", state: "DOWN", completed: false }, { item: "Flaps", state: "UP", completed: false }, { item: "Radios", state: "OFF", completed: false }, { item: "Autopilot master", state: "OFF", completed: false }, { item: "Avionics master", state: "OFF", completed: false }, { item: "All electrical switches", state: "OFF", completed: false }, { item: "Circuit breakers", state: "IN", completed: false }, { item: "Fuel quantity", state: "CHECK", completed: false }, { item: "Pitot heat", state: "CHECK AMPS", completed: false }, { item: "Rotating beacon", state: "ON", completed: false }
        ]
    },
    {
        sectionTitle: "ENGINE START",
        items: [
            { item: "Fuel selectors", state: "DESIRED TANK", completed: false }, { item: "Mixture", state: "RICH", completed: false }, { item: "Prop", state: "FULL FORWARD", completed: false }, { item: "Throttle", state: "CRACKED", completed: false }, { item: "Carb heat", state: "OFF", completed: false }, { item: "Master switch", state: "ON", completed: false }, { item: "Fuel pump", state: "ON", completed: false }, { item: "Fuel pressure", state: "CHECK", completed: false }, { item: "Fuel pump", state: "OFF", completed: false }, { item: "Primer", state: "1-5 STROKES", completed: false }, { item: "Mags", state: "BOTH", completed: false }, { item: "Prop area", state: "CLEAR", completed: false }, { item: "Starter", state: "ENGAGE", completed: false }, { item: "Oil pressure", state: "CHECK", completed: false }, { item: "Mixture", state: "LEAN AS REQ", completed: false }
        ]
    },
    {
        sectionTitle: "TAXI",
        items: [
            { item: "Primer", state: "LOCKED", completed: false }, { item: "Avionics master", state: "ON", completed: false }, { item: "Ammeter", state: "CHECK", completed: false }, { item: "Radios", state: "ON", completed: false }, { item: "Flight plan", state: "PROGRAM", completed: false }, { item: "Frequencies", state: "TUNE", completed: false }, { item: "ADS-B", state: "ON", completed: false }, { item: "Transponder", state: "ALT", completed: false }, { item: "Auto pilot", state: "TEST", completed: false }, { item: "Heading indicator", state: "SET", completed: false }, { item: "Altimeter", state: "SET", completed: false }, { item: "Landing gear lamp", state: "GREEN", completed: false }, { item: "Nav lights", state: "AS REQ", completed: false }, { item: "Parking brake", state: "RELEASE", completed: false }, { item: "Brakes on initial roll", state: "TEST", completed: false }, { item: "Flight instruments", state: "CHECK", completed: false }
        ]
    },
    {
        sectionTitle: "RUN-UP",
        items: [
            { item: "Position", state: "INTO WIND", completed: false }, { item: "Parking brake", state: "SET", completed: false }, { item: "Fuel quantity", state: "CHECK", completed: false }, { item: "Fuel selectors", state: "DESIRED TANK", completed: false }, { item: "Mixture", state: "AS REQ", completed: false }, { item: "Throttle", state: "2000 RPM", completed: false }, { item: "Engine instruments", state: "CHECK", completed: false, notes: ["Oil press, oil temp, fuel press,", "ammeter, vacuum, CHT, EGT"] }, { item: "Magnetos", state: "CHECK", completed: false, notes: ["-Max drop: 125 RPM", "-Max diff: 50 RPM"] }, { item: "Carb heat", state: "CHECK", completed: false }, { item: "Prop", state: "CYCLE x 3", completed: false, notes: ["-Check RPM drop & MP increase", "-Check visually for oil", "-Oil pressure drop in green to 1500 RPM", "-Then REDUCE to 1500 RPM & CHECK steady"] }
        ]
    },
    {
        sectionTitle: "BEFORE TAKEOFF",
        items: [
            { item: "Controls", state: "FREE & CORRECT", completed: false }, { item: "Door", state: "LATCHED", completed: false }, { item: "Elevator trim", state: "NEUTRAL", completed: false }, { item: "Rudder trim", state: "AS REQ", completed: false }, { item: "Flaps", state: "AS DESIRED", completed: false }, { item: "Fuel selectors", state: "DESIRED TANK", completed: false }, { item: "Fuel pump", state: "ON", completed: false }, { item: "Prop", state: "FULL FORWARD", completed: false }, { item: "Carb heat", state: "OFF", completed: false }, { item: "Engine gauges", state: "CHECK", completed: false }, { item: "Pitot heat", state: "AS REQ", completed: false }, { item: "Strobes", state: "ON", completed: false }, { item: "Landing lights", state: "AS REQ", completed: false }, { item: "Mixture", state: "FULL RICH", completed: false }, { item: "Engine out on takeoff", state: "BRIEF", completed: false }
        ]
    },
    {
        sectionTitle: "TAKEOFF",
        items: [
            { item: "Stopwatch", state: "START", completed: false }, { item: "Throttle", state: "FULL OPEN", completed: false }, { item: "Airspeed indicator", state: "ALIVE", completed: false }, { item: "Engine gauges", state: "CHECK", completed: false }, { item: "Rotate", state: "85 MPH", completed: false }, { item: "Positive climb", state: "VERIFY", completed: false }, { item: "Gear", state: "UP", completed: false }, { item: "Flaps", state: "UP", completed: false }, { item: "Airspeed", state: "Vy 105 MPH", completed: false }, { item: "Emerg. landing area", state: "VERIFY", completed: false }
        ]
    },
    {
        sectionTitle: "CLIMB",
        items: [
            { item: "Fuel pump", state: "OFF @ 1000 ft AGL", completed: false }, { item: "Power", state: "Do not reduce until 1000 ft AGL", completed: false, notes: ["Throttle: As engine temps will tolerate", "Prop: 2400 RPM MAX"] }, { item: "CHT", state: "CHECK", completed: false }, { item: "Mixture", state: "LEAN AS REQ", completed: false }
        ]
    },
    {
        sectionTitle: "CRUISE",
        items: [
            { item: "Throttle", state: "SET", completed: false }, { item: "Prop", state: "SET", completed: false }, { item: "Mixture", state: "LEAN AS REQ", completed: false }, { item: "Fuel pump", state: "VERIFY OFF", completed: false }, { item: "Fuel pressure", state: "CHECK", completed: false }, { item: "Engine gauges", state: "CHECK", completed: false }
        ]
    },
    {
        sectionTitle: "APPROACH",
        items: [
            { item: "Flaps (<125 MPH)", state: "AS DESIRED", completed: false }, { item: "G.U.M.P.S.", state: "CHECK", completed: false, notes: ["Gas (fuel selectors, quantity, pressure),", "undercarriage, mixture, prop,", "switches (fuel pump)"] }, { item: "Carb heat", state: "AS REQ", completed: false }, { item: "Airspeed", state: "120 MPH", completed: false }, { item: "Landing clearance", state: "AS REQ", completed: false }
        ]
    },
    {
        sectionTitle: "LANDING",
        items: [
            { item: "Gear lamp & lever", state: "GREEN & UP", completed: false }, { item: "Flaps", state: "DOWN", completed: false, notes: ["If windy flaps AS REQ & add 5 MPH"] }, { item: "Airspeed", state: "90 MPH", completed: false }
        ]
    },
    {
        sectionTitle: "AFTER LANDING",
        items: [
            { item: "Flaps", state: "UP", completed: false }, { item: "Stopwatch", state: "STOP", completed: false }, { item: "Trim", state: "NEUTRAL", completed: false }, { item: "Mixture", state: "LEAN AS REQ", completed: false }, { item: "Fuel pump", state: "OFF", completed: false }, { item: "Strobes (clear of RWY)", state: "OFF", completed: false }
        ]
    },
    {
        sectionTitle: "SHUTDOWN",
        items: [
            { item: "Parking brake", state: "SET", completed: false }, { item: "Radios", state: "OFF", completed: false }, { item: "Transponder", state: "OFF", completed: false }, { item: "Autopilot master", state: "OFF", completed: false }, { item: "Avionics master", state: "OFF", completed: false }, { item: "Master switch", state: "OFF", completed: false }, { item: "Throttle", state: "CLOSED", completed: false }, { item: "Mixture", state: "IDLE CUTOFF", completed: false }, { item: "All switches", state: "OFF", completed: false }, { item: "Control lock", state: "SECURE", completed: false }, { item: "Doors / windows", state: "CLOSED", completed: false }, { item: "Tie-downs", state: "SECURE", completed: false }
        ]
    }
];

// --- Main Logical ---
document.addEventListener('DOMContentLoaded', () => {
    const checklistContainer = document.querySelector('#checklist-container');
    const mainElement = document.querySelector('.checklist-main');

    let checklistState = JSON.parse(localStorage.getItem('comancheChecklistState')) || {};

    // --- Functions ---
    function saveState() {
        localStorage.setItem('comancheChecklistState', JSON.stringify(checklistState));
    }

    function displayChecklist(data) {
        checklistContainer.innerHTML = '';

        data.forEach(section => {
            const sectionElement = document.createElement('section');
            sectionElement.classList.add('checklist-section');

            const sectionTitle = document.createElement('h3');
            sectionTitle.textContent = section.sectionTitle;
            sectionElement.appendChild(sectionTitle);

            const itemList = document.createElement('ul');
            section.items.forEach(item => {
                const listItem = document.createElement('li');
                listItem.classList.add('checklist-item');
                const itemId = `${section.sectionTitle}-${item.item}`.replace(/[\s/()<>]/g, '-').replace(/--+/g, '-');
                listItem.dataset.id = itemId;

                if (checklistState[itemId]) {
                    listItem.classList.add('completed');
                }

                listItem.innerHTML = `<span class="item-name">${item.item}</span><span class="item-state">${item.state}</span>`;
                if (item.notes && item.notes.length > 0) {
                    const notesElement = document.createElement('div');
                    notesElement.classList.add('item-notes');
                    notesElement.innerHTML = item.notes.join('<br>');
                    listItem.appendChild(notesElement);
                }
                itemList.appendChild(listItem);
            });

            sectionElement.appendChild(itemList);

            const resetSectionBtn = document.createElement('button');
            resetSectionBtn.className = 'reset-button reset-section-btn';
            resetSectionBtn.textContent = 'Reset Section';
            resetSectionBtn.dataset.section = section.sectionTitle;
            sectionElement.appendChild(resetSectionBtn);

            checklistContainer.appendChild(sectionElement);
        });
    }

    function resetSection(sectionTitle) {
        document.querySelectorAll(`.checklist-section`).forEach(sectionEl => {
            if (sectionEl.querySelector('h3').textContent === sectionTitle) {
                sectionEl.querySelectorAll('.checklist-item').forEach(itemEl => {
                    itemEl.classList.remove('completed');
                    delete checklistState[itemEl.dataset.id];
                });
            }
        });
        saveState();
    }

    function resetAll() {
        document.querySelectorAll('.checklist-item').forEach(itemEl => {
            itemEl.classList.remove('completed');
        });
        checklistState = {};
        saveState();
    }

    // --- Event Listener ---
    mainElement.addEventListener('click', function (e) {
        const item = e.target.closest('.checklist-item');
        const resetSectionBtn = e.target.closest('.reset-section-btn');
        const resetAllBtn = e.target.closest('#reset-all-btn');

        if (item) {
            const itemId = item.dataset.id;
            checklistState[itemId] = !checklistState[itemId];
            saveState();
            item.classList.toggle('completed');
        } else if (resetSectionBtn) {
            resetSection(resetSectionBtn.dataset.section);
        } else if (resetAllBtn) {
            resetAll();
        }
    });

    // ---Start ---
    displayChecklist(checklistData);
}); 