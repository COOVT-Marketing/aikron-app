const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyJutfFpRt8e10anFQgTIX0bHtfz9ukxZk_5UoZEt_O4qR-qcehcw0H92pj0UjLvomP1A/exec';

const COMPANY_MAP = {
  'DEFAULT': 'Aikron'
};

const US_STATES = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  const aliases = {
    agentName: ['fullname','agentName','agent_name','agent','user'],
    phone: ['phone','phone_number','phonenumber','phone_code'],
    first: ['first','first_name','fname'],
    last: ['last','last_name','lname'],
    age: ['age'],
    state: ['state'],
    zip: ['zip','postal','postal_code','zipcode'],
    dob: ['dob','birthdate','d_o_b'],
    company: ['company','vendor'],
    campaign: ['campaign','campaign_id'],
    did: ['did','did_id','inbound_number'],
    comments: ['comments','notes','comment']
  };
  const keys = aliases[name] || [name];
  for (const k of keys) {
    const v = params.get(k);
    if (v && v.trim()) return v.trim();
  }
  return '';
}

function boot() {
  // Always show the sale form (no more "No webform found")
  renderPage();
}

function renderPage() {
  const phone = getParam('phone');
  const campaignParam = getParam('campaign');
  const urlCompany = getParam('company');
  const detectedCompany = urlCompany || COMPANY_MAP[campaignParam] || 'Aikron';
  const stateOptions = US_STATES.map(s => `<option value="${s}">${s}</option>`).join('');

  document.getElementById('app').innerHTML = `
    <div class="vtm-card">
      <div class="vtm-header">
        <div class="vtm-logo"><i class="ti ti-headset"></i></div>
        <div class="vtm-header-txt">
          <h1>Sale Form</h1>
          <p>Aikron · Auto</p>
        </div>
        <div class="live-badge"><div class="live-dot"></div>Live call</div>
      </div>

      <div class="sale-form-inner">
        <input type="hidden" id="campaign" value="${campaignParam}">
        <input type="hidden" id="company" value="${detectedCompany}">
        <input type="hidden" id="zip">
        <input type="hidden" id="dob">

        <div class="section-label">Agent Information</div>
        <div class="field-grid full">
          <div class="field-group">
            <label>Agent Name</label>
            <div class="input-wrap"><i class="ti ti-id"></i>
              <input type="text" id="agentName" placeholder="Agent Name / ID">
            </div>
          </div>
        </div>
        <div class="field-grid full">
          <div class="field-group">
            <label>DID</label>
            <div class="input-wrap"><i class="ti ti-hash"></i>
              <input type="text" id="did" placeholder="e.g. D1">
            </div>
          </div>
        </div>

        <div class="section-label">Customer Information</div>
        <div class="field-grid">
          <div class="field-group">
            <label>First name</label>
            <div class="input-wrap"><i class="ti ti-user"></i>
              <input type="text" id="firstName" placeholder="First name">
            </div>
          </div>
          <div class="field-group">
            <label>Last name</label>
            <div class="input-wrap"><i class="ti ti-user"></i>
              <input type="text" id="lastName" placeholder="Last name">
            </div>
          </div>
        </div>
        <div class="field-grid">
          <div class="field-group">
            <label>Phone number</label>
            <div class="input-wrap"><i class="ti ti-phone"></i>
              <input type="tel" id="phone" placeholder="10-digit number">
            </div>
          </div>
          <div class="field-group">
            <label>State</label>
            <div class="input-wrap"><i class="ti ti-map-pin"></i>
              <select id="state">
                <option value="">Select state</option>
                ${stateOptions}
              </select>
            </div>
          </div>
        </div>
        <div class="field-grid full">
          <div class="field-group">
            <label>Age</label>
            <div class="input-wrap"><i class="ti ti-calendar-event"></i>
              <input
              <!-- FILE TRUNCATED HERE IN SOURCE UPLOAD — paste the rest to complete this file -->
