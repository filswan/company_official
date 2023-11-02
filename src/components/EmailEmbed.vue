<template>
    <div id="mc_embed_shell">
        <div id="mc_embed_signup">
            <form action="https://filswan.us17.list-manage.com/subscribe/post?u=d00f980f8a4f0c1054e178765&amp;id=b7ae44195a&amp;f_id=00657ee0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                <div id="mc_embed_signup_scroll">
                    <div class="mc-field-group">
                        <input type="text" name="FNAME" class="required text describe" id="mce-FNAME" value="" :placeholder="$t('contactUs.First-Name')" required="" oninvalid="setCustomValidity('Please fill out this field.');" oninput="setCustomValidity('');" />
                    </div>
                    <div class="mc-field-group">
                        <input type="text" name="LNAME" class="required text describe" id="mce-LNAME" value="" :placeholder="$t('contactUs.Last-Name')" required="" oninvalid="setCustomValidity('Please fill out this field.');" oninput="setCustomValidity('');" />
                    </div>
                    <div class="mc-field-group">
                        <input type="email" name="EMAIL" class="required email describe" id="mce-EMAIL" required="" value="" :placeholder="$t('contactUs.Email')" oninvalid="setCustomValidity('Please fill out this field.');" oninput="setCustomValidity('');" />
                    </div>
                    <div class="mc-field-group">
                        <textarea type="text" rows="4" name="MMERGE3" class="required text textarea describe" id="mce-MMERGE3" required="" value="" :placeholder="$t('contactUs.help')" oninvalid="setCustomValidity('Please fill out this field.');" oninput="setCustomValidity('');"></textarea>
                    </div>
                    <div hidden=""><input type="hidden" name="tags" value="6547302"></div>
                    <div id="mce-responses" class="clear">
                        <div class="response" id="mce-error-response" style="display: none;"></div>
                        <div class="response" id="mce-success-response" style="display: none;"></div>
                    </div>
                    <div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_d00f980f8a4f0c1054e178765_b7ae44195a" tabindex="-1" value=""></div>
                    <div class="clear">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="describe" :value="$t('contactUs.Submit')">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="less" scoped>
#mc_embed_signup {
  form {
    margin: 0;
    color: #231f20;
    input,
    textarea {
      width: 100%;
      height: 50px;
      padding: 0 20px;
      font-family: inherit;
      border-color: #c4c4c4;
      border-radius: 10px;
      line-height: 50px;
      text-indent: 0;
      color: inherit;
      outline-color: #4799b9;
      @media screen and (min-width: 2160px) {
        height: 35px;
        padding: 0 10px;
        line-height: 35px;
      }
      @media screen and (max-width: 600px) {
        height: 120px;
        line-height: 120px;
        border-radius: 20px;
      }
      &:focus,
      &:active,
      &:hover {
        border-color: #4799b9;
      }
      &.textarea {
        height: auto;
      }
      &#mc-embedded-subscribe {
        width: auto;
        height: auto;
        padding: 8px 35px;
        margin: 0 auto;
        background: transparent;
        border: 1px solid #4799b9;
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 10px;
        line-height: 1.55;
        &:hover {
          background-color: #4799b9;
          color: #fff;
        }
      }
    }
  }
}
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
