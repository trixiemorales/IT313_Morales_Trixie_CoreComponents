
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import StudentCard from './StudentCard';
import initialStudents from './students';

const StudentDirectory = () => {
  const [students, setStudents] = useState(initialStudents);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFlag = (id) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id
          ? { ...student, flagged: !student.flagged }
          : student
      )
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#06245B"
        barStyle="light-content"
      />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.cap}>🎓</Text>

        <Text style={styles.headerTitle}>
          Student Directory
        </Text>

        <Text style={styles.headerSubtitle}>
          {students.length} students this term
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>⌕</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Search student name..."
          placeholderTextColor="#64748B"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Student List */}
      <ScrollView
        style={styles.studentList}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              year={student.year}
             photo={student.photo}
              flagged={student.flagged}
              onToggleFlag={toggleFlag}
            />
          ))
        ) : (
          <Text style={styles.noResults}>
            No students found.
          </Text>
        )}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerIcon}>♟</Text>

        <Text style={styles.footerText}>
          IT 313 • Student Directory
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FF',
  },

  header: {
    backgroundColor: '#06245B',
    paddingTop: 55,
    paddingBottom: 35,
    paddingHorizontal: 22,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  cap: {
    fontSize: 38,
    textAlign: 'right',
    marginBottom: 5,
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  headerSubtitle: {
    fontSize: 18,
    color: '#DCE8FF',
    marginTop: 8,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5E9F8',
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 15,
    paddingHorizontal: 16,
    borderRadius: 30,
    height: 58,
  },

  searchIcon: {
    fontSize: 30,
    color: '#33466E',
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#172554',
  },

  studentList: {
    flex: 1,
  },

  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  noResults: {
    textAlign: 'center',
    color: '#64748B',
    fontSize: 16,
    marginTop: 30,
  },

  footer: {
    backgroundColor: '#06245B',
    paddingVertical: 18,
    alignItems: 'center',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },

  footerIcon: {
    fontSize: 25,
    color: '#FFFFFF',
    marginBottom: 5,
  },

  footerText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
});

export default StudentDirectory;
