import React from 'react';
import './activeSubscription.css';

const ActiveSubscription = () => {
   return (
      <div>
         <form method="POST" action="https://sourceconsulting.activehosted.com/proc.php" id="_form_5_" class="_form _form_5 _inline-form  _dark" novalidate>
    <input type="hidden" name="u" value="5" />
    <input type="hidden" name="f" value="5" />
    <input type="hidden" name="s" />
    <input type="hidden" name="c" value="0" />
    <input type="hidden" name="m" value="0" />
    <input type="hidden" name="act" value="sub" />
    <input type="hidden" name="v" value="2" />
    <div class="_form-content">
      <div class="_form_element _x53953185 _full_width _clear" >
        <div class="_form-title">
          Subscribe for Email Updates
        </div>
      </div>
      <div class="_form_element _x87525999 _full_width _clear" >
        <div class="_html-code">
          <p>
            Sign up here to get more details.
          </p>
        </div>
      </div>
      <div class="_form_element _x99567026 _full_width " >
        <label class="_form-label">
          Full Name
        </label>
        <div class="_field-wrapper">
          <input type="text" name="fullname" placeholder="Type your name" />
        </div>
      </div>
      <div class="_form_element _x99100671 _full_width " >
        <label class="_form-label">
          Email*
        </label>
        <div class="_field-wrapper">
          <input type="text" name="email" placeholder="Type your email" required/>
        </div>
      </div>
      <div class="_button-wrapper _full_width">
        <button id="_form_5_submit" class="_submit" type="submit">
          Submit
        </button>
      </div>
      <div class="_clear-element">
      </div>
    </div>
    <div class="_form-thank-you" style={{display:"none"}}>
    </div>
    <div class="_form-branding">
      <div class="_marketing-by">
        Marketing by
      </div>
      <a href="https://www.activecampaign.com/?utm_medium=referral&utm_campaign=acforms" class="_logo"></a>
    </div>
  </form>

      </div>
   )
}

export default ActiveSubscription