<template>
  <div class="workspace-ui">
    <!-- Header Section -->
    <header class="header">
      <div class="logo">Valmet</div>
      <div class="workspace-title">
        Current Workspace:
        <span class="title-name">Md. Ahsan Kabir, Bijt Aton</span>
      </div>
    </header>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="section">
          <h4>Dashboard</h4>
          <ul>
            <li>Folders</li>
            <li>SEARCH202</li>
            <li>SEARCH202</li>
          </ul>
          <button class="edit-workspace">Edit Workspace</button>
          <button class="add-workspace">Add New Workspace</button>
        </div>
        <div class="section">
          <h4>Queries</h4>
          <ul>
            <li>Recent</li>
            <li>Reserved</li>
            <li>Document Groups</li>
            <li>Item Groups</li>
          </ul>
        </div>
      </aside>

      <!-- Content Section -->
      <div class="content">
        <div class="toolbar">
          <button>Copy</button>
          <button>Paste</button>
          <button>Remove</button>
          <button>Update Ver/Rev</button>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Preview</th>
              <th>Code</th>
              <th>Ver/Rev</th>
              <th>Status</th>
              <th>Created By</th>
              <th>Modified By</th>
              <th>Modified</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="8" class="no-data">No data available</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Quick Launch Section -->
      <aside class="quick-launch">
        <h4>Quick Launch</h4>
        <button>Workflows</button>
        <button>Create New</button>
        <button>Aton Portal</button>
        <div class="recent-items">
          <h4>Recent</h4>
          <ul>
            <li>775TESTITEM06001, Accessories</li>
            <li>223368, Hotelli Pohjanhol Oy</li>
            <li>IHITEM11, 2.0</li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceUI",
};
</script>

<style scoped>
.workspace-ui {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f4f4f4;
}

.main-content {
  display: flex;
  flex: 1;
}

.sidebar,
.quick-launch {
  width: 20%;
  background-color: #eaeaea;
  padding: 10px;
}

.content {
  flex: 1;
  padding: 10px;
}

.toolbar {
  display: flex;
  gap: 5px;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.data-table th,
.data-table td {
  border: 1px solid #ccc;
  padding: 5px;
  text-align: left;
}

.no-data {
  text-align: center;
  color: #888;
}

.section h4 {
  margin-bottom: 5px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 5px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
