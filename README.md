# 🚀 n8n Ultimate JSON Functions Cheat Sheet

<div align="center">

![n8n Logo](https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png)

**The most comprehensive reference for n8n expressions & functions**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/n8n-cheatsheet?style=social)](https://github.com/yourusername/n8n-cheatsheet/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/n8n-cheatsheet?style=social)](https://github.com/yourusername/n8n-cheatsheet/network/members)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/n8n-cheatsheet)](https://github.com/yourusername/n8n-cheatsheet/issues)
[![GitHub license](https://img.shields.io/github/license/yourusername/n8n-cheatsheet)](https://github.com/yourusername/n8n-cheatsheet/blob/main/LICENSE)

[📖 View Interactive HTML Version](https://yourusername.github.io/n8n-cheatsheet) • [🐛 Report Bug](https://github.com/yourusername/n8n-cheatsheet/issues) • [💡 Request Feature](https://github.com/yourusername/n8n-cheatsheet/issues)

</div>

---

## ⚡ Quick Start

Stop searching through documentation! This cheat sheet contains **everything** you need to master n8n expressions:

- 🎯 **200+ Real Examples** - Copy, paste, and go!
- 🛡️ **Error-Safe Patterns** - Avoid common pitfalls
- 🚀 **Performance Tips** - Write faster workflows
- 📱 **Mobile Friendly** - Reference anywhere

## 📋 Table of Contents

- [🔑 Basic Data Access](#-basic-data-access)
- [📅 Date & Time Functions](#-date--time-functions)
- [🔤 String Manipulation](#-string-manipulation)
- [📋 Array Processing](#-array-processing)
- [❓ Conditional Logic](#-conditional-logic)
- [🧮 Mathematical Operations](#-mathematical-operations)
- [🗂️ Object Manipulation](#-object-manipulation)
- [🔗 Multi-Node Data Access](#-multi-node-data-access)
- [🛡️ Error Handling](#-error-handling)
- [🚀 Advanced Patterns](#-advanced-patterns)
- [🌐 API & HTTP Helpers](#-api--http-helpers)
- [⚙️ Workflow Control](#-workflow-control)
- [💡 Pro Tips](#-pro-tips--best-practices)

---

## 🔑 Basic Data Access

### Current Item Data
\\\javascript
{{ .fieldName }}                    // Get field from current item
{{ [\"field with spaces\"] }}         // Field names with spaces/special chars
{{ .user.email }}                   // Nested object access
{{ .items[0] }}                     // First item in array
{{ .items[0].name }}                // Field from first array item
\\\

### Data from Other Nodes
\\\javascript
{{ Node Name.item.json.field }}     // Data from specific node
{{ HTTP Request.item.json.id }}     // Common pattern for API responses
{{ Set.item.json.value }}           // Data from Set node
\\\

### All Items from Node
\\\javascript
{{ Node Name.all() }}               // All items from node as array
{{ Node Name.all()[0].json.field }} // First item's field
{{ Node Name.all().length }}        // Count of items from node
\\\

---

## 📅 Date & Time Functions

### Current Date/Time
\\\javascript
{{  }}                               // Current timestamp (ISO format)
{{  }}                             // Today at midnight
{{ .toMillis() }}                    // Current timestamp in milliseconds
\\\

### Date Formatting
\\\javascript
{{ .format('YYYY-MM-DD') }}          // 2024-01-15
{{ .format('MM/DD/YYYY') }}          // 01/15/2024
{{ .format('MMMM Do, YYYY') }}       // January 15th, 2024
{{ .format('HH:mm:ss') }}            // 14:30:45
{{ .format('dddd') }}                // Monday
\\\

### Date Calculations
\\\javascript
{{ .plus({days: 7}) }}               // 7 days from now
{{ .minus({hours: 2}) }}             // 2 hours ago
{{ .plus({months: 1, days: 5}) }}    // 1 month and 5 days from now
{{ .startOf('day') }}                // Beginning of today
{{ .endOf('month') }}                // End of current month
\\\

### Date Comparisons
\\\javascript
{{  > '2024-01-01' }}                // Boolean comparison
{{ .diff('2024-01-01', 'days') }}    // Days between dates
{{ .isSame('2024-01-15', 'day') }}   // Check if same day
\\\

---

## 🔤 String Manipulation

### Case Conversion
\\\javascript
{{ .name.toLowerCase() }}           // convert to lowercase
{{ .name.toUpperCase() }}           // CONVERT TO UPPERCASE
{{ .name.charAt(0).toUpperCase() + .name.slice(1) }} // Capitalize first letter
\\\

### String Cleaning
\\\javascript
{{ .text.trim() }}                  // Remove leading/trailing spaces
{{ .text.replace(/\s+/g, ' ') }}    // Replace multiple spaces with single
{{ .text.replace(/[^a-zA-Z0-9]/g, '') }} // Remove special characters
\\\

### String Extraction
\\\javascript
{{ .text.slice(0, 50) }}            // First 50 characters
{{ .text.slice(-10) }}              // Last 10 characters
{{ .text.substring(5, 15) }}        // Characters 5-15
{{ .email.split('@')[0] }}          // Username from email
{{ .email.split('@')[1] }}          // Domain from email
\\\

### String Checking
\\\javascript
{{ .text.includes('keyword') }}     // Check if contains text
{{ .text.startsWith('Hello') }}     // Check if starts with
{{ .text.endsWith('.com') }}        // Check if ends with
{{ .text.length }}                  // String length
\\\

### String Building
\\\javascript
{{ .firstName + ' ' + .lastName }} // Concatenate strings
{{ \Hello \!\ }}             // Template literals
{{ ['Hello', .name, '!'].join(' ') }} // Join array into string
\\\

---

## 📋 Array Processing

### Basic Array Operations
\\\javascript
{{ .items.length }}                 // Count array items
{{ .items[0] }}                     // First item
{{ .items[-1] }}                    // Last item (n8n specific)
{{ .items.slice(0, 5) }}            // First 5 items
{{ .items.slice(-3) }}              // Last 3 items
\\\

### Array Searching
\\\javascript
{{ .items.find(item => item.id === '123') }}        // Find specific item
{{ .items.filter(item => item.active === true) }}   // Filter items
{{ .items.some(item => item.status === 'pending') }} // Check if any match
{{ .items.every(item => item.validated === true) }} // Check if all match
\\\

### Array Transformation
\\\javascript
{{ .items.map(item => item.name) }}                 // Extract field from all items
{{ .items.map(item => item.price * 1.1) }}          // Transform all values
{{ .items.join(', ') }}                             // Convert to string
{{ .tags.join(' | ') }}                             // Join with custom separator
\\\

### Array Aggregation
\\\javascript
{{ .prices.reduce((sum, price) => sum + price, 0) }} // Sum all prices
{{ Math.max(....scores) }}                          // Highest score
{{ Math.min(....scores) }}                          // Lowest score
{{ .items.reduce((sum, item) => sum + item.quantity, 0) }} // Sum quantities
\\\

---

## ❓ Conditional Logic

### Simple Conditions
\\\javascript
{{ .status === 'active' ? 'Yes' : 'No' }}           // Basic ternary
{{ .price > 100 ? 'Expensive' : 'Affordable' }}     // Number comparison
{{ .email ? .email : 'No email provided' }}    // Existence check
\\\

### Multiple Conditions
\\\javascript
{{ .score >= 90 ? 'A' : .score >= 80 ? 'B' : 'C' }} // Multiple conditions
{{ .status === 'premium' && .verified ? 'VIP' : 'Standard' }} // AND logic
{{ .urgent || .priority === 'high' ? 'Rush' : 'Normal' }} // OR logic
\\\

### Complex Conditionals
\\\javascript
{{ .user?.role === 'admin' ? 'Full Access' : 'Limited' }}  // Safe property access
{{ .items?.length > 0 ? .items[0].name : 'No items' }} // Array safety
\\\

---

## 🧮 Mathematical Operations

### Basic Math
\\\javascript
{{ .price + .tax }}            // Addition
{{ .total - .discount }}       // Subtraction
{{ .price * .quantity }}       // Multiplication
{{ .total / .items.length }}   // Division
{{ .score % 10 }}                   // Modulo (remainder)
\\\

### Rounding & Precision
\\\javascript
{{ Math.round(.value) }}            // Round to nearest integer
{{ Math.ceil(.value) }}             // Round up
{{ Math.floor(.value) }}            // Round down
{{ Number(.price.toFixed(2)) }}     // Round to 2 decimal places
{{ Math.round(.value * 100) / 100 }} // Another way to round to 2 decimals
\\\

### Advanced Math
\\\javascript
{{ Math.abs(.difference) }}         // Absolute value
{{ Math.max(.val1, .val2, .val3) }} // Maximum value
{{ Math.min(.val1, .val2, .val3) }} // Minimum value
{{ Math.pow(.base, 2) }}            // Power (square)
{{ Math.sqrt(.value) }}             // Square root
\\\

### Percentage Calculations
\\\javascript
{{ (.completed / .total) * 100 }} // Percentage complete
{{ .price * 0.1 }}                  // 10% of price
{{ .oldPrice * 1.15 }}              // Add 15%
{{ .price * 0.85 }}                 // 15% discount
\\\

---

## 🗂️ Object Manipulation

### Object Information
\\\javascript
{{ Object.keys() }}                 // Get all property names
{{ Object.values() }}               // Get all values
{{ Object.entries() }}              // Get [key, value] pairs
{{ Object.keys().length }}          // Count properties
\\\

### Object Building
\\\javascript
{{ { name: .name, email: .email } }}          // Create new object
{{ { ..., modified:  } }}                      // Spread operator (add field)
{{ { ..., status: 'processed' } }}                 // Override field
\\\

### Safe Object Access
\\\javascript
{{ .user?.profile?.avatar }}       // Safe nested access
{{ .settings?.theme || 'default' }} // Default value if undefined
{{ .data?.items?.[0]?.name }}       // Safe array access in objects
\\\

---

## 🔗 Multi-Node Data Access

### Combining Data from Multiple Nodes
\\\javascript
{{ User Data.item.json.name + ' - ' + Order Data.item.json.id }}
{{ { 
  user: Get User.item.json,
  order: Get Order.item.json,
  timestamp: 
} }}
\\\

### Working with All Items
\\\javascript
{{ HTTP Request.all().map(item => item.json.id) }}  // Get all IDs
{{ Process Data.all().length }}                     // Count processed items
\\\

### Node Execution Context
\\\javascript
{{ .name }}                         // Current node name
{{ .id }}                       // Current workflow ID
{{ .id }}                      // Current execution ID
{{  }}                          // Current run index (for loops)
\\\

---

## 🛡️ Error Handling

### Safe Property Access
\\\javascript
{{ .data?.field }}                 // Won't error if data is null/undefined
{{ .items?.[0]?.name }}             // Safe array and property access
{{ .user?.contacts?.[0]?.email }}   // Deep safe access
\\\

### Default Values
\\\javascript
{{ .name || 'Unknown' }}           // Use 'Unknown' if name is falsy
{{ .items || [] }}                 // Use empty array if undefined
{{ .price || 0 }}                  // Use 0 if price is falsy
{{ .config?.timeout ?? 5000 }}     // Use 5000 if timeout is null/undefined
\\\

### Type Checking
\\\javascript
{{ typeof .value === 'string' }}   // Check if string
{{ Array.isArray(.items) }}        // Check if array
{{ .value !== null && .value !== undefined }} // Check if has value
{{ Number.isInteger(.count) }}     // Check if integer
\\\

---

## 🚀 Advanced Patterns

### Dynamic Property Access
\\\javascript
{{ [Config.item.json.fieldName] }}            // Dynamic field name
{{ [\\_id\] }}                       // Computed property name
\\\

### Complex Data Transformation
\\\javascript
// Group items by category
{{ .items.reduce((acc, item) => {
  acc[item.category] = acc[item.category] || [];
  acc[item.category].push(item);
  return acc;
}, {}) }}

// Create lookup object
{{ .users.reduce((acc, user) => {
  acc[user.id] = user.name;
  return acc;
}, {}) }}
\\\

### Regular Expressions
\\\javascript
{{ .text.match(/\d+/g) }}          // Extract all numbers
{{ .email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) }} // Validate email format
{{ .text.replace(/\b\w/g, l => l.toUpperCase()) }} // Title case
\\\

---

## 🌐 API & HTTP Helpers

### URL Building
\\\javascript
{{ \https://api.example.com/users/\\ }}   // Dynamic URL
{{ .baseUrl + '/api/v1/data?id=' + .id }}     // Concatenated URL
\\\

### Query Parameters
\\\javascript
{{ new URLSearchParams({
  page: .page,
  limit: .limit,
  sort: .sortBy
}).toString() }}                        // Create query string
\\\

### Headers and Authentication
\\\javascript
{{ { 'Authorization': \Bearer \\ } }}      // Auth header
{{ { 'Content-Type': 'application/json', 'X-API-Key': .apiKey } }}
\\\

### Response Processing
\\\javascript
{{ .data.results || [] }}         // Safe API response access
{{ .response?.data?.items?.[0] }}  // Deep API response parsing
\\\

---

## ⚙️ Workflow Control

### Item Processing
\\\javascript
{{ (0).json.field }}               // Access specific item by index
{{ ().length }}                   // Count all items
{{ ('nodeName') }}                // Get all items from specific node
\\\

### Environment & Context
\\\javascript
{{ .NODE_ENV }}                     // Environment variable
{{ .API_KEY }}                  // Access secret (n8n Cloud)
{{ .zoneName }}                     // Current timezone
\\\

### Debugging Helpers
\\\javascript
{{ JSON.stringify(, null, 2) }}    // Pretty print JSON
{{ console.log() }}                // Debug output (in Function node)
{{ Object.keys().join(', ') }}     // See available fields
\\\

---

## 💡 Pro Tips & Best Practices

### ✅ Performance Optimization
\\\javascript
// Good - Store complex calculations
{{ .items.filter(item => item.active).length }}

// Better - Use in Set node to avoid recalculation
// In Set node: activeCount = {{ .items.filter(item => item.active).length }}
// Then use: {{ .activeCount }}
\\\

### ✅ Readable Code
\\\javascript
// Good - Break complex expressions into parts
{{ .user.firstName + ' ' + .user.lastName }}

// Better - Use template literals for readability
{{ \\ \\ }}
\\\

### ⚠️ Common Gotchas
\\\javascript
// ❌ Dangerous - Will error if items is null
{{ .items.length }}

// ✅ Safe - Won't error
{{ .items?.length || 0 }}

// ❌ Dangerous - Assumes array structure
{{ .data[0].name }}

// ✅ Safe - Checks existence
{{ .data?.[0]?.name }}
\\\

---

## 📚 Real-World Examples

<details>
<summary><strong>👤 User Management</strong></summary>

\\\javascript
// Full name
{{ \\ \\ }}

// Email validation
{{ /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(.email) }}

// User status
{{ .lastLogin > .minus({days: 30}) ? 'Active' : 'Inactive' }}

// Generate username
{{ (.firstName.toLowerCase() + '.' + .lastName.toLowerCase()).replace(/[^a-z.]/g, '') }}
\\\
</details>

<details>
<summary><strong>🛒 E-commerce</strong></summary>

\\\javascript
// Total price with tax
{{ Math.round((.price * .quantity * 1.08) * 100) / 100 }}

// Discount percentage
{{ Math.round((((.originalPrice - .salePrice) / .originalPrice) * 100)) }}%

// Stock status
{{ .inventory > 10 ? 'In Stock' : .inventory > 0 ? 'Low Stock' : 'Out of Stock' }}

// Order summary
{{ \Order #\: \ items, Total: $\\ }}
\\\
</details>

<details>
<summary><strong>📊 Data Processing</strong></summary>

\\\javascript
// Clean phone number
{{ .phone.replace(/\D/g, '') }}

// Format currency
{{ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(.amount) }}

// Generate slug
{{ .title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') }}

// Parse CSV row
{{ .csvRow.split(',').map(field => field.trim()) }}
\\\
</details>

---

## 🤝 Contributing

This is a **community-driven** resource! Help make it even better:

### Ways to Contribute
- 🐛 **Report Issues** - Found something wrong? [Open an issue](https://github.com/yourusername/n8n-cheatsheet/issues)
- 💡 **Suggest Functions** - Know a useful pattern? Share it!
- 📖 **Improve Examples** - Make examples clearer or add use cases
- 🌍 **Translations** - Help translate for global community
- ⭐ **Star the Repo** - Help others discover this resource

### Quick Links
- [📋 Issues](https://github.com/yourusername/n8n-cheatsheet/issues)
- [🔀 Pull Requests](https://github.com/yourusername/n8n-cheatsheet/pulls)
- [💬 Discussions](https://github.com/yourusername/n8n-cheatsheet/discussions)

---

## 📖 Additional Resources

- [🏠 **n8n Official Docs**](https://docs.n8n.io/code-examples/expressions/)
- [💬 **n8n Community Forum**](https://community.n8n.io/)
- [🎯 **n8n Templates**](https://n8n.io/workflows/)
- [📱 **JavaScript Reference**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

---

## 📊 Stats

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api/pin/?username=yourusername&repo=n8n-cheatsheet&theme=tokyonight)

</div>

---

## 🙌 Contributors

Thanks to these amazing people for making this project better!

[![Contributors](https://contrib.rocks/image?repo=Kookylo/n8n-ultimate-cheat)](https://github.com/Kookylo/n8n-ultimate-cheat/graphs/contributors)

**Special Thanks:**
- [Kookylo](https://github.com/Kookylo) (Project creator & maintainer)
- [Your Name Here] – Add yourself via PR!

Want to see your name here? [Open a pull request](https://github.com/Kookylo/n8n-ultimate-cheat/pulls) or [suggest an example](https://github.com/Kookylo/n8n-ultimate-cheat/issues/new).

<div align="center">

**Made with ❤️ for the n8n community**

[⬆ Back to Top](#-n8n-ultimate-json-functions-cheat-sheet)

</div>
