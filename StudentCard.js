
import React from 'react';

import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

const StudentCard = ({
  id,
  name,
  year,
  photo,
  flagged,
  onToggleFlag,
}) => {
  return (
    <View style={styles.card}>
      {/* Student Photo */}
    <Image
  source={photo}
  style={styles.studentImage}
/>

      {/* Student Information */}
      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>
          {name}
        </Text>

        <Text style={styles.studentYear}>
          {year}
        </Text>
      </View>

      {/* Flag Button */}
      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          flagged
            ? styles.flaggedButton
            : styles.unflaggedButton,
          pressed && styles.pressedButton,
        ]}
      >
        <Text style={styles.flagIcon}>
          {flagged ? '✓' : '⚑'}
        </Text>

        <Text style={styles.flagButtonText}>
          {flagged
            ? 'Flagged for Advising'
            : 'Flag for Advising'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 15,
    borderRadius: 22,

    elevation: 4,

    shadowColor: '#0B1F4D',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  studentImage: {
    width: 70,
    height: 70,
    borderRadius: 14,
  },

  studentInfo: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },

  studentName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0B1020',
  },

  studentYear: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 5,
  },

  flagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 112,
    minHeight: 58,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 30,
  },

  unflaggedButton: {
    backgroundColor: '#155EEF',
  },

  flaggedButton: {
    backgroundColor: '#218838',
  },

  pressedButton: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },

  flagIcon: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 5,
  },

  flagButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    flexShrink: 1,
  },
});

export default StudentCard;
