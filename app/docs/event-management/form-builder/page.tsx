export default function FormBuilderPage() {
  return (
    <div className="max-w-none space-y-8">
      <div className="text-primary text-sm font-medium mb-4">
        Event Management
      </div>
      
      <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
        Registration Form Fields
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 font-normal leading-relaxed">
        Understand all available registration form fields and how they work. Vihaya's registration form is automatically configured based on your event settings, with fields appearing dynamically based on enabled features.
      </p>

      <div className="space-y-8 leading-7">
        <div id="overview">
          <h2 className="text-2xl font-semibold mb-4">Form Overview</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            The registration form in Vihaya is a smart, multi-step form that adapts based on your event configuration. 
            It includes standard fields that are always present, plus optional fields that appear when specific features are enabled.
          </p>
          <div className="p-5 rounded-lg border bg-primary/5 mt-4">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> The form automatically saves user information from previous registrations to speed up future registrations. 
              Users can also use quick-fill options for common colleges and departments.
            </p>
          </div>
        </div>

        <div id="standard-fields">
          <h2 className="text-2xl font-semibold mb-4">Standard Fields (Always Present)</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            These fields appear in every registration form:
          </p>
          
          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Full Name</h3>
                  <p className="text-sm text-muted-foreground mb-2">Required text field for the attendee's full name.</p>
                  <div className="p-3 rounded bg-muted/50 text-xs text-muted-foreground">
                    <strong>Validation:</strong> Cannot be empty
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Email Address</h3>
                  <p className="text-sm text-muted-foreground mb-2">Required email field with automatic validation.</p>
                  <div className="p-3 rounded bg-muted/50 text-xs text-muted-foreground">
                    <strong>Validation:</strong> Must be a valid email format (contains @ and .)
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Phone Number</h3>
                  <p className="text-sm text-muted-foreground mb-2">Required phone field with 10-digit validation.</p>
                  <div className="p-3 rounded bg-muted/50 text-xs text-muted-foreground">
                    <strong>Validation:</strong> Must be exactly 10 digits
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">College Name</h3>
                  <p className="text-sm text-muted-foreground mb-2">Required text field for the attendee's college or institution.</p>
                  <div className="p-3 rounded bg-muted/50 text-xs text-muted-foreground">
                    <strong>Validation:</strong> Cannot be empty
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Department</h3>
                  <p className="text-sm text-muted-foreground mb-2">Required text field for the attendee's department or branch.</p>
                  <div className="p-3 rounded bg-muted/50 text-xs text-muted-foreground">
                    <strong>Validation:</strong> Cannot be empty
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  6
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Year of Study</h3>
                  <p className="text-sm text-muted-foreground mb-2">Required dropdown field with predefined options.</p>
                  <div className="p-3 rounded bg-muted/50 text-xs text-muted-foreground">
                    <strong>Options:</strong> 1st Year, 2nd Year, 3rd Year, 4th Year, 5th Year
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of standard registration form fields here</p>
          </div>
        </div>

        <div id="conditional-fields">
          <h2 className="text-2xl font-semibold mb-4">Conditional Fields (Appear Based on Settings)</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            These fields appear automatically when you enable specific features in your event settings:
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Special Pricing Category</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>When enabled:</strong> Special Pricing feature in event settings
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                A dropdown field that allows users to select their pricing category (e.g., "IEEE Member", "Non-IEEE Member", "Student", "Professional").
              </p>
              <div className="p-3 rounded bg-muted/50 text-xs text-muted-foreground">
                <strong>Example Options:</strong> IEEE Member (₹0), Non-IEEE Member (₹299), Student (₹199)
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">IEEE ID</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>When enabled:</strong> Special Pricing is enabled AND user selects "IEEE Member" category
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Required text field for IEEE membership ID when the user selects the IEEE Member pricing category.
              </p>
              <div className="p-3 rounded bg-muted/50 text-xs text-muted-foreground">
                <strong>Validation:</strong> Required if IEEE Member category is selected
              </div>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Referral ID</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>When enabled:</strong> Referral System feature in event settings
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Optional text field where users can enter a referral ID if they were referred by someone.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">WhatsApp Group</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>When enabled:</strong> WhatsApp Group feature in event settings
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Displays the WhatsApp group link and allows users to confirm if they've joined. The link is clickable and opens in the WhatsApp app.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Accommodation</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>When enabled:</strong> Accommodation feature in event settings
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                A Yes/No selection field asking if the user needs accommodation. If "Yes" is selected, the accommodation price is added to the total.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Food Coupon</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>When enabled:</strong> Food Coupons feature in event settings
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                A Yes/No selection field asking if the user wants a food coupon. If "Yes" is selected, the food coupon price is added to the total and a unique QR code is generated.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Discount Coupon</h3>
              <p className="text-sm text-muted-foreground mb-2">
                <strong>When available:</strong> Coupons are configured for the event
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                A text field where users can enter a discount coupon code. The system validates the coupon and applies the discount if valid.
              </p>
            </div>
          </div>
        </div>

        <div id="team-registration-fields">
          <h2 className="text-2xl font-semibold mb-4">Team Registration Fields</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            When an event is configured as a team event, additional fields appear for team registration:
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Team Name</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Required text field for the team's name. This helps identify the team during the event.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Team Members</h3>
              <p className="text-sm text-muted-foreground mb-2">
                For each team member (minimum to maximum team size), the following fields are required:
              </p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside mt-2 ml-4">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>College Name</li>
                <li>Department</li>
                <li>Year of Study</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                The form dynamically adds/removes team member fields based on the min/max team size configured in event settings.
              </p>
            </div>
          </div>

          {/* Screenshot placeholder */}
          <div className="my-6 p-8 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-center">
            <p className="text-sm text-muted-foreground mb-2">📸 Screenshot Placeholder</p>
            <p className="text-xs text-muted-foreground">Add screenshot of team registration form here</p>
          </div>
        </div>

        <div id="form-features">
          <h2 className="text-2xl font-semibold mb-4">Form Features</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            The registration form includes several helpful features:
          </p>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Auto-Fill from Previous Registrations</h3>
              <p className="text-sm text-muted-foreground">
                The form automatically fills in name, email, phone, college, department, and year from the user's last registration to speed up the process.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Quick Fill Options</h3>
              <p className="text-sm text-muted-foreground">
                Users can quickly select common colleges and departments from a dropdown list instead of typing.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Progress Indicator</h3>
              <p className="text-sm text-muted-foreground">
                A progress bar shows how many fields have been completed, helping users understand how much is left.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Multi-Step Form</h3>
              <p className="text-sm text-muted-foreground">
                The form is divided into steps: Personal Details and Payment/Review, making it less overwhelming.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Real-Time Validation</h3>
              <p className="text-sm text-muted-foreground">
                Fields are validated as users type, providing immediate feedback on errors.
              </p>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Price Calculation</h3>
              <p className="text-sm text-muted-foreground">
                The total price is calculated in real-time as users select options, showing base price + food coupon + accommodation - discount.
              </p>
            </div>
          </div>
        </div>

        <div id="form-templates">
          <h2 className="text-2xl font-semibold mb-4">Form Templates</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            While Vihaya doesn't use traditional "templates," the form automatically adapts based on your event configuration. 
            Here are common form configurations:
          </p>

          <div className="space-y-4 mt-4">
            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Basic Free Event</h3>
              <p className="text-sm text-muted-foreground mb-2">Standard fields only:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Name, Email, Phone</li>
                <li>College, Department, Year</li>
                <li>No payment required</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Paid Event with Special Pricing</h3>
              <p className="text-sm text-muted-foreground mb-2">Includes pricing selection:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>All standard fields</li>
                <li>Special Pricing Category dropdown</li>
                <li>IEEE ID (if IEEE Member selected)</li>
                <li>Payment processing</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Event with Food & Accommodation</h3>
              <p className="text-sm text-muted-foreground mb-2">Includes additional options:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>All standard fields</li>
                <li>Food Coupon selection</li>
                <li>Accommodation selection</li>
                <li>WhatsApp Group link</li>
                <li>Payment processing</li>
              </ul>
            </div>

            <div className="p-5 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Team Event</h3>
              <p className="text-sm text-muted-foreground mb-2">Includes team registration:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                <li>Team Name</li>
                <li>Team Member fields (min to max team size)</li>
                <li>All standard fields for each member</li>
                <li>Payment processing for the team</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="field-types">
          <h2 className="text-2xl font-semibold mb-4">Field Types Used</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            The registration form uses the following field types:
          </p>

          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Text Input</h3>
              <p className="text-xs text-muted-foreground">For name, email, phone, college, department, IDs</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Email Input</h3>
              <p className="text-xs text-muted-foreground">Specialized text field with email validation</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Phone Input</h3>
              <p className="text-xs text-muted-foreground">Specialized text field with 10-digit validation</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Dropdown</h3>
              <p className="text-xs text-muted-foreground">For year selection, pricing categories</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Yes/No Selection</h3>
              <p className="text-xs text-muted-foreground">For accommodation, food coupon, WhatsApp group</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-1 text-sm">Link Display</h3>
              <p className="text-xs text-muted-foreground">For WhatsApp group links (clickable)</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg border bg-primary/5">
          <h3 className="font-semibold mb-2">Best Practices</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Enable only the fields you actually need to avoid overwhelming users</li>
            <li>Use special pricing categories for membership-based discounts</li>
            <li>Enable WhatsApp groups for better event communication</li>
            <li>Consider food coupons for events with meals to streamline verification</li>
            <li>Test your form configuration before publishing the event</li>
            <li>Use clear pricing category names that users will understand</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
